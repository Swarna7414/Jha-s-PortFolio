import * as THREE from "three";
import ky from "kyouka";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import Stats from "three/examples/jsm/libs/stats.module.js";
import * as CANNON from "cannon-es";
import "../Styles/style.css";
import {
  EffectComposer,
  RenderPass,
  NormalPass,
  SSAOEffect,
  EffectPass
} from "postprocessing";

const calcAspect = (el: HTMLElement) => el.clientWidth / el.clientHeight;

const getNormalizedMousePos = (e: MouseEvent | Touch) => {
  return {
    x: (e.clientX / window.innerWidth) * 2 - 1,
    y: -(e.clientY / window.innerHeight) * 2 + 1
  };
};

class MouseTracker {
  mousePos: THREE.Vector2;
  mouseSpeed: number;
  constructor() {
    this.mousePos = new THREE.Vector2(0, 0);
    this.mouseSpeed = 0;
  }
  trackMousePos() {
    window.addEventListener("mousemove", (e) => {
      this.setMousePos(e);
    });
    window.addEventListener(
      "touchstart",
      (e: TouchEvent) => {
        this.setMousePos(e.touches[0]);
      },
      { passive: false }
    );
    window.addEventListener("touchmove", (e: TouchEvent) => {
      this.setMousePos(e.touches[0]);
    });
  }
  setMousePos(e: MouseEvent | Touch) {
    const { x, y } = getNormalizedMousePos(e);
    this.mousePos.x = x;
    this.mousePos.y = y;
  }
  trackMouseSpeed() {
    let lastMouseX = -1;
    let lastMouseY = -1;
    let mouseSpeed = 0;
    window.addEventListener("mousemove", (e) => {
      const mousex = e.pageX;
      const mousey = e.pageY;
      if (lastMouseX > -1) {
        mouseSpeed = Math.max(
          Math.abs(mousex - lastMouseX),
          Math.abs(mousey - lastMouseY)
        );
        this.mouseSpeed = mouseSpeed / 100;
      }
      lastMouseX = mousex;
      lastMouseY = mousey;
    });
    document.addEventListener("mouseleave", () => {
      this.mouseSpeed = 0;
    });
  }
}

class Point {
  x: number;
  y: number;
  z: number;
  constructor(p: { x: number; y: number; z: number }) {
    this.x = p.x;
    this.y = p.y;
    this.z = p.z;
  }
}

const array2Point = (arr: number[]) => new Point({ x: arr[0], y: arr[1], z: arr[2] });
const arrays2Point = (arrs: number[][]) => arrs.map((item) => array2Point(item));
const point2ThreeVector = (point: Point) => new THREE.Vector3(point.x, point.y, point.z);
const point2CannonVec = (point: Point) => new CANNON.Vec3(point.x, point.y, point.z);
const point2ThreeEuler = (point: Point) => new THREE.Euler(point.x, point.y, point.z);

const getViewport = (camera: THREE.Camera) => {
  const position = new THREE.Vector3();
  const target = new THREE.Vector3();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const distance = (camera as any).getWorldPosition(position).distanceTo(target);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fov = ((camera as any).fov * Math.PI) / 180; // convert vertical fov to radians
  const h = 2 * Math.tan(fov / 2) * distance; // visible height
  const w = h * (window.innerWidth / window.innerHeight);
  const viewport = { width: w, height: h };
  return viewport;
};

type MeshObject = {
  geometry?: THREE.BufferGeometry;
  material?: THREE.Material;
  position?: THREE.Vector3;
};

type PerspectiveCameraParams = {
  fov: number;
  near: number;
  far: number;
};

type OrthographicCameraParams = {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  near: number;
  far: number;
  zoom: number;
};

class MeshPhysicsObject {
  mesh: THREE.Mesh | THREE.Object3D;
  body: CANNON.Body;
  copyPosition: boolean;
  copyQuaternion: boolean;
  constructor(
    mesh: THREE.Mesh | THREE.Object3D,
    body: CANNON.Body,
    copyPosition = true,
    copyQuaternion = true
  ) {
    this.mesh = mesh;
    this.body = body;
    this.copyPosition = copyPosition;
    this.copyQuaternion = copyQuaternion;
  }
}

class Base {
  debug: boolean;
  container: HTMLElement | null;
  perspectiveCameraParams: PerspectiveCameraParams;
  orthographicCameraParams: OrthographicCameraParams;
  cameraPosition: THREE.Vector3;
  lookAtPosition: THREE.Vector3;
  rendererParams: THREE.WebGLRendererParameters;
  mouseTracker: MouseTracker;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera | THREE.OrthographicCamera;
  renderer!: THREE.WebGLRenderer;
  controls!: OrbitControls;
  stats!: Stats;
  shaderMaterial!: THREE.ShaderMaterial;
  composer!: EffectComposer;
  constructor(sel: string, debug = false) {
    this.debug = debug;
    this.container = document.querySelector(sel);
    this.perspectiveCameraParams = {
      fov: 75,
      near: 0.1,
      far: 100
    };
    this.orthographicCameraParams = {
      zoom: 2,
      near: -100,
      far: 1000
    };
    this.cameraPosition = new THREE.Vector3(0, 3, 10);
    this.lookAtPosition = new THREE.Vector3(0, 0, 0);
    this.rendererParams = {
      alpha: true,
      antialias: true
    };
    this.mouseTracker = new MouseTracker();
  }
  
  init() {
    this.createScene();
    this.createPerspectiveCamera();
    this.createRenderer();
    this.createMesh({});
    this.createLight();
    this.createOrbitControls();
    this.createDebugUI();
    this.addListeners();
    this.setLoop();
  }
  
  createScene() {
    const scene = new THREE.Scene();
    this.scene = scene;
  }
  
  createPerspectiveCamera() {
    const { perspectiveCameraParams, cameraPosition, lookAtPosition } = this;
    const { fov, near, far } = perspectiveCameraParams;
    const aspect = calcAspect(this.container!);
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.copy(cameraPosition);
    camera.lookAt(lookAtPosition);
    this.camera = camera;
  }
  
  createOrthographicCamera() {
    const { orthographicCameraParams, cameraPosition, lookAtPosition } = this;
    const { left, right, top, bottom, near, far } = orthographicCameraParams;
    const camera = new THREE.OrthographicCamera(
      left!,
      right!,
      top!,
      bottom!,
      near,
      far
    );
    camera.position.copy(cameraPosition);
    camera.lookAt(lookAtPosition);
    this.camera = camera;
  }
  
  updateOrthographicCameraParams() {
    const { container } = this;
    const { zoom, near, far } = this.orthographicCameraParams;
    const aspect = calcAspect(container!);
    this.orthographicCameraParams = {
      left: -zoom * aspect,
      right: zoom * aspect,
      top: zoom,
      bottom: -zoom,
      near,
      far,
      zoom
    };
  }
  
  createRenderer() {
    const { rendererParams } = this;
    const renderer = new THREE.WebGLRenderer(rendererParams);
    renderer.setClearColor(0x000000, 0);
    this.container!.appendChild(renderer.domElement);
    this.renderer = renderer;
    this.resizeRendererToDisplaySize();
  }
  
  resizeRendererToDisplaySize() {
    const { renderer } = this;
    renderer.setSize(this.container!.clientWidth, this.container!.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }
  
  createMesh(
    meshObject: MeshObject,
    container: THREE.Scene | THREE.Mesh = this.scene
  ) {
    const {
      geometry = new THREE.BoxGeometry(1, 1, 1),
      material = new THREE.MeshStandardMaterial({
        color: new THREE.Color("#d9dfc8")
      }),
      position = new THREE.Vector3(0, 0, 0)
    } = meshObject;
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(position);
    container.add(mesh);
    return mesh;
  }
  
  createLight() {
    const dirLight = new THREE.DirectionalLight(
      new THREE.Color("#ffffff"),
      0.5
    );
    dirLight.position.set(0, 50, 0);
    this.scene.add(dirLight);
    const ambiLight = new THREE.AmbientLight(new THREE.Color("#ffffff"), 0.4);
    this.scene.add(ambiLight);
  }
  
  createOrbitControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    const { lookAtPosition } = this;
    controls.target.copy(lookAtPosition);
    controls.update();
    this.controls = controls;
  }
  
  createDebugUI() {
    const axisHelper = new THREE.AxesHelper(5);
    this.scene.add(axisHelper);
    const stats = new Stats();
    this.container!.appendChild(stats.dom);
    this.stats = stats;
  }
  
  addListeners() {
    this.onResize();
  }
  
  onResize(_e?: UIEvent) {
    window.addEventListener(
      "resize",
      () => {
        const aspect = calcAspect(this.container!);
        const camera = this.camera as THREE.PerspectiveCamera;
        camera.aspect = aspect;
        camera.updateProjectionMatrix();
        this.resizeRendererToDisplaySize();
        if (this.shaderMaterial) {
          this.shaderMaterial.uniforms.uResolution.value.x = window.innerWidth;
          this.shaderMaterial.uniforms.uResolution.value.y = window.innerHeight;
        }
      }
    );
  }
  
  update() {
    console.log("animation");
  }
  
  setLoop() {
    this.renderer.setAnimationLoop(() => {
      this.update();
      if (this.controls) {
        this.controls.update();
      }
      if (this.stats) {
        this.stats.update();
      }
      if (this.composer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
    });
  }
}

class PhysicsBase extends Base {
  world!: CANNON.World;
  gravity!: CANNON.Vec3;
  meshPhysicsObjs!: MeshPhysicsObject[];
  constructor(sel: string, debug = false) {
    super(sel, debug);
    this.gravity = new CANNON.Vec3(0, -9.82, 0);
    this.meshPhysicsObjs = [];
  }
  
  createWorld() {
    const { gravity } = this;
    const world = new CANNON.World();
    world.gravity.copy(gravity);
    this.world = world;
  }
  
  createBody(
    shape: CANNON.Shape,
    body: CANNON.Body,
    bodyOffset: CANNON.Vec3 = new CANNON.Vec3(0, 0, 0),
    orientation: CANNON.Quaternion = new CANNON.Quaternion(0, 0, 0)
  ) {
    body.addShape(shape, bodyOffset, orientation);
    this.world.addBody(body);
    return body;
  }
  
  update() {
    this.sync();
    this.world.step(1 / 60);
  }
  
  sync() {
    this.meshPhysicsObjs.forEach((obj) => {
      const { mesh, body, copyPosition, copyQuaternion } = obj;
      if (copyPosition) {
        (mesh.position as THREE.Vector3).copy(body.position as unknown as THREE.Vector3);
      }
      if (copyQuaternion) {
        (mesh.quaternion as THREE.Quaternion).copy(body.quaternion as unknown as THREE.Quaternion);
      }
    });
  }
}

class BouncyBalloon extends PhysicsBase {
  ballMat: THREE.MeshStandardMaterial;
  balls: MeshPhysicsObject[] = [];
  planes: MeshPhysicsObject[] = [];
  mouseFollowBall: MeshPhysicsObject;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  viewport!: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
  constructor(sel: string, debug: boolean) {
    super(sel, debug);
    this.perspectiveCameraParams = {
      fov: 35,
      near: 10,
      far: 40
    };
    this.cameraPosition = new THREE.Vector3(0, 0, 20); // 相机位置
    this.gravity = new CANNON.Vec3(0, 0, 0); // 重力
    this.ballMat = null!; // 球的材质
    this.mouseFollowBall = null!; // 跟随鼠标的大球
    this.params = {
      ballColor: "#002f93" // 球的
    };
  }
  
  init() {
    this.createWorld();
    this.createScene();
    this.createPerspectiveCamera();
    this.viewport = getViewport(this.camera);
    this.createRenderer();
    this.changeRendererParams();
    this.createBallMaterial();
    this.createBalls();
    this.createFourPlanes();
    this.addBallsDamping();
    this.createMouseFollowBall();
    this.hideSomeObjs();
    this.createLight();
    this.createPostprocessingEffect();
    this.mouseTracker.trackMousePos();
    this.addListeners();
    this.setLoop();
  }
  
  createBallMaterial() {
  const ballMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color("white"),       
    emissive: new THREE.Color("black"),   
    roughness: 0.3,
    metalness: 0.2
  });
  this.ballMat = ballMat;
}
  
  createBall({ position = new Point({ x: 0, y: 0, z: 0 }), scale = 1 }: { position?: Point; scale?: number }) {
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = this.ballMat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(point2ThreeVector(position));
    mesh.scale.copy(new THREE.Vector3(scale, scale, scale));
    this.scene.add(mesh);
    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(scale, scale, scale)),
      position: point2CannonVec(position)
    });
    this.world.addBody(body);
    const obj = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(obj);
    return obj;
  }
  
  createBalls(count = 64) {
    const balls = [...Array(count).keys()].map(() => {
      const scale = ky.randomNumberInRange(0.5, 1);
      const ball = this.createBall({
        scale
      });
      return ball;
    });
    this.balls = balls;
  }
  
  createPlane({
    position = new Point({ x: 0, y: 0, z: 0 }),
    rotation = new Point({ x: 0, y: 0, z: 0 })
  }: { position?: Point; rotation?: Point }) {
    const geo = new THREE.PlaneGeometry(1, 1);
    const mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("red"),
      side: THREE.DoubleSide
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(point2ThreeVector(position));
    mesh.rotation.copy(point2ThreeEuler(rotation));
    this.scene.add(mesh);
    const body = new CANNON.Body({
      shape: new CANNON.Plane(),
      position: point2CannonVec(position),
      quaternion: new CANNON.Quaternion().setFromEuler(
        rotation.x,
        rotation.y,
        rotation.z
      )
    });
    this.world.addBody(body);
    const obj = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(obj);
    return obj;
  }
  
  createFourPlanes() {
    const planePositions = arrays2Point([
      [0, 0, 0],
      [0, 0, 8],
      [0, -4, 0],
      [0, 4, 0]
    ]);
    const planeRotations = arrays2Point([
      [0, 0, 0],
      [0, ky.deg2rad(-180), 0],
      [ky.deg2rad(-90), 0, 0],
      [ky.deg2rad(90), 0, 0]
    ]);
    const planes: MeshPhysicsObject[] = [];
    for (let i = 0; i < 4; i++) {
      const position = planePositions[i];
      const rotation = planeRotations[i];
      const plane: MeshPhysicsObject = this.createPlane({ position, rotation });
      planes.push(plane);
    }
    this.planes = planes;
  }
  
  addBallsDamping() {
    this.balls.forEach((ball) => {
      ball.body.angularDamping = 0.2;
      ball.body.linearDamping = 0.95;
    });
  }
  
  update() {
    this.sync();
    this.world.step(1 / 60);
    this.applyForce2Balls();
    this.mouseBallFollow();
  }
  
  applyForce2Balls() {
    this.balls.forEach((obj: MeshPhysicsObject) => {
      const force = new THREE.Vector3()
        .copy(obj.body.position as unknown as THREE.Vector3)
        .normalize()
        .multiplyScalar(-36);
      obj.body.applyForce(force as unknown as CANNON.Vec3);
    });
  }
  
  createMouseFollowBall(scale = 2) {
    const geo = new THREE.SphereGeometry(1, 64, 64);
    const mat = this.ballMat;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.copy(new THREE.Vector3(scale, scale, scale));
    this.scene.add(mesh);
    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Sphere(2),
      type: CANNON.Body.KINEMATIC
    });
    this.world.addBody(body);
    const mouseFollowBall = new MeshPhysicsObject(mesh, body);
    this.meshPhysicsObjs.push(mouseFollowBall);
    this.mouseFollowBall = mouseFollowBall;
  }
  
  mouseBallFollow() {
    const mousePos = this.mouseTracker.mousePos;
    const x = (mousePos.x * this.viewport.width) / 2;
    const y = (mousePos.y * this.viewport.height) / 2;
    const pos = new CANNON.Vec3(x, y, 2.5);
    this.mouseFollowBall.body.position.copy(pos);
  }
  
  hideSomeObjs() {
    this.planes.forEach((plane) => (plane.mesh.visible = false));
    this.mouseFollowBall.mesh.visible = false;
  }
  
  changeRendererParams() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this.renderer as any).outputEncoding = (THREE as any).sRGBEncoding;
    this.renderer.toneMapping = THREE.CineonToneMapping;
    this.renderer.toneMappingExposure = 1.5;
  }
  
  createLight() {
    const ambiLight = new THREE.AmbientLight(new THREE.Color("white"), 0.75);
    this.scene.add(ambiLight);
    const dirLight1 = new THREE.DirectionalLight(new THREE.Color("white"), 4);
    dirLight1.position.set(0, 5, -5);
    this.scene.add(dirLight1);
    const spotLight = new THREE.SpotLight(new THREE.Color("white"));
    spotLight.intensity = 1.2;
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    spotLight.position.set(10, 15, 20);

    spotLight.position.set(20, 20, 25);
    this.scene.add(spotLight);
  }
  
  createPostprocessingEffect() {
    const { ballColor } = this.params;
    const composer = new EffectComposer(this.renderer);
    const renderPass = new RenderPass(this.scene, this.camera);
    composer.addPass(renderPass);
    const normalPass = new NormalPass(this.scene, this.camera);
    composer.addPass(normalPass);
    const ssaoConfig = {
      rangeThreshold: 0.5,
      rangeFalloff: 0.1,
      bias: 0.5
    };
    const ssaoEffect1 = new SSAOEffect(
      this.camera,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (normalPass as any).renderTarget.texture,
      {
        ...ssaoConfig,
        color: ballColor,
        samples: 9,
        radius: 30,
        intensity: 30
      }
    );
    const ssaoEffect2 = new SSAOEffect(
      this.camera,
      (normalPass as any).renderTarget.texture,
      {
        ...ssaoConfig,
        color: ballColor,
        samples: 18,
        radius: 5,
        intensity: 30
      }
    );
    const effectPass = new EffectPass(this.camera, ssaoEffect1, ssaoEffect2);
    
    (effectPass as any).renderToScreen = true;
    composer.addPass(effectPass);
    this.composer = composer;
  }
}

const start = () => {
  const bouncyBalloon = new BouncyBalloon("#bg-effect", false);
  bouncyBalloon.init();
};

let effectStarted = false;

export function startBackgroundBallsEffect() {
  if (effectStarted) return;
  effectStarted = true;

  // Wait for DOM to be ready
  requestAnimationFrame(() => {
    const container = document.querySelector("#bg-effect");
    if (container) {
      start();
    } else {
      console.warn("Element #bg-effect not found in DOM.");
      effectStarted = false;
    }
  });
}
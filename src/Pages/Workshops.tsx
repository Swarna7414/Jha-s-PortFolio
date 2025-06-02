import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { FaRegDotCircle } from "react-icons/fa";
import { FaCircleDot } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import "../Styles/component.css";
import { ImageCELF, InternationalEndoscopy, Medico, MedicoPoly, Standfordtalk } from "../Services/WorkshopLinks";

const WorkShops:React.FC=()=>{

    return(
        <section className="h-full">
            <h1 className="text-center text-4xl font-bold">WorkShops & Research Talks</h1>
            <div className="flex flex-col xl:flex-row  justify-between gap-5 mt-7 p-5 h-full w-full">
                <div className="w-full xl:w-6/12 h-1/4 border-2 p-3 rounded-2xl group hover:shadow-md hover:shadow-white cursor-pointer">
                    <div className="ml-4 flex flex-row items-center gap-2 text-2xl font-semibold group-hover:text-blue-300 duration-200">
                        <GoGoal className="mt-1.5"/>
                        <h1>WorkShops</h1>
                    </div>
                    <div>
                        <div className="flex flex-row items-center mt-5 hover:text-blue-200 hover:underline hover:underline-offset-6 transition duration-300" onClick={Medico}>
                            <FaRegDotCircle/>
                            <h1 className="ml-4">Medico: Transparency in Medical Image Segmentation</h1>
                        </div>

                        <div className="flex flex-row items-center mt-5 hover:text-blue-200 hover:underline hover:underline-offset-6 transition duration-300" onClick={MedicoPoly}>
                            <FaRegDotCircle/>
                            <h1 className="ml-4">Medico automatic polyp segmentation challenge</h1>
                        </div>

                        <div className="flex flex-row items-center mt-5 hover:text-blue-200 hover:underline hover:underline-offset-6 transition duration-300">
                            <FaRegDotCircle/>
                            <h1 className="ml-4">EndoTect Challenge</h1>
                        </div>

                        <div className="flex flex-row items-center mt-5 hover:text-blue-200 hover:underline hover:underline-offset-6 transition duration-300" onClick={InternationalEndoscopy}>
                            <FaRegDotCircle className="text-2xl"/>
                            <h1 className="ml-4">3rd International Endoscopy Computer Vision
                              Challenge and Workshop.(EndoCV2021)</h1>
                        </div>

                        <div className="flex flex-row items-center mt-5 hover:text-blue-200 hover:underline hover:underline-offset-6 transition duration-300" onClick={ImageCELF}>
                            <FaRegDotCircle/>
                            <h1 className="ml-4">ImageCLEF</h1>
                        </div>
                    </div>
                </div>
                <div className="w-full h-screen flex flex-col gap-y-1.5">
                    <div className="flex flex-row items-center ml-8 text-3xl font-semibold gap-2.5 hover:text-blue-300">
                        <GrWorkshop className="mt-2"/>
                        <h1 className="cursor-pointer duration-300">My Research Talks</h1>
                    </div>

                    <div className="h-full w-full flex flex-col gap-y-0.5 border-2 rounded-2xl p-3 overflow-y-auto cursor-pointer hover:shadow-lg hover:shadow-white">
                        {/**First Row */}
                        <div className="flex flex-col space-y-1 group" onClick={Standfordtalk}>
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">From Data to Diagnosis – Advancing Medical Imaging with Curated Dataset and AI Algorithms</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-100">
                                < FaLocationDot className="mt-0.5"/>
                                <h1>Stanford MedAI, 2025</h1>
                            </div>
                            <p className="text-justify ml-1 font-extralight group-hover:text-blue-50">
                                Accurate medical diagnosis significantly relies on high-quality medical imaging data and 
                                advanced computational algorithms. Despite remarkable progress, diagnostic accuracy in radiology
                                and gastrointestinal (GI) endoscopy faces persistent challenges, including data scarcity, 
                                interobserver variability, biases, and limited generalizability. In this talk, I will discuss 
                                our approach to addressing these challenges through meticulous dataset curation and the 
                                development of novel medical image segmentation algorithms. Specifically, I will highlight our 
                                efforts in curating comprehensive multinational datasets—including CirrMRI600+ for liver cirrhosis
                                imaging; PolypDB, PolypGen, and Kvasir-SEG for colonoscopy; and HyperKvasir and KvasirCapsule for GI 
                                endoscopy and video capsule endoscopy explicitly designed to accelerate AI-driven medical research and 
                                enhance clinical diagnostic accuracy. Additionally, I will present our medical segmentation architectures, 
                                such as ResUNet++, DoubleUNet, and ColonSegNet, and Transformer-based models such as TransNetR, and MDNet, 
                                which have set benchmarks in medical image segmentation. By integrating curated data with cutting-edge deep 
                                learning methodologies, our work significantly improves diagnostic precision, paving the way for robust, 
                                generalizable, and clinically reliable AI-driven solutions in healthcare.
                            </p>
                            <hr className="border-t border-blue-200 my-4 transform scale-y-50" />
                        </div>

                        <div className="flex flex-col space-y-1 group">
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">Beyond Human Vision: Transforming Radiology and GI Endoscopy with AI</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-100">
                                < FaLocationDot className="mt-0.5"/>
                                <h1> Brown Bag Series, University of South Dakota, 2024</h1>
                            </div>
                            <p className="text-justify ml-1 font-extralight group-hover:text-blue-50">
                                In this talk, I explored the transformative impact of artificial intelligence in radiology 
                                and gastrointestinal (GI) endoscopy. AI-powered models are not just augmenting human expertise 
                                but also redefining diagnostic accuracy, efficiency, and accessibility in medical imaging. I 
                                highlighted cutting-edge AI techniques for disease detection, segmentation, and classification, 
                                demonstrating how deep learning models surpass human vision in complex medical scenarios. 
                                Additionally, I discussed the ethical and practical challenges of AI deployment in clinical 
                                settings, paving the way for the next generation of intelligent healthcare solutions.
                            </p>
                            <hr className="border-t border-blue-200 my-4 transform scale-y-50" />
                        </div>

                        <div className="flex flex-col space-y-1 group">
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">Transforming Medical AI: Advancing Deep Learning for Precision Diagnosis & Image Segmentation</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-100">
                                < FaLocationDot className="mt-0.5"/>
                                <h1>City University of NewYork, College of Staten Island, 2024</h1>
                            </div>
                            <p className="text-justify font-extralight group-hover:text-blue-50">
                                I presented my latest research focusing on AI-driven innovations in medical imaging, particularly in radiology and 
                                gastrointestinal (GI) endoscopy. My work introduces novel deep learning architectures, including TransNetR, a 
                                transformer-based model for polyp segmentation with strong out-of-distribution generalization, and SynergyNet, 
                                which bridges discrete and continuous representations for multi-organ segmentation. I also discussed Perturbed 
                                Prompts-based SAM (PP-SAM), which enhances the adaptability of the Segment Anything Model (SAM) for polyp segmentation, 
                                and diffusion-based architectures that push the boundaries of medical image segmentation beyond traditional CNNs and transformers. 
                                Additionally, I highlighted my contributions to open-access datasets such as CirrMRI600+ for liver cirrhosis analysis, PanSegData for 
                                pancreas segmentation, and the Peri-Pancreatic Edema Dataset, which provide new benchmarks for medical AI research. My work extends to 
                                real-time polyp detection in colonoscopy, tumor localization in radiation therapy, and instrument tracking for minimally invasive surgery, 
                                demonstrating how AI can transform clinical workflows.
                            </p>
                            <hr className="border-t border-blue-200 my-4 transform scale-y-50" />
                        </div>

                        <div className="flex flex-col space-y-1 group">
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">Biopsy Free early detection of liver diseases using AI</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                < FaLocationDot className="mt-0.5"/>
                                <h1>Northwestern University, Department of Radiology, USA, 2023</h1>
                            </div>
                            <p className="text-justify ml-1 font-extralight group-hover:text-blue-50">
                                Traditional liver disease diagnosis often relies on invasive biopsy procedures, 
                                which pose risks and discomfort to patients. My work introduces AI-powered imaging solutions 
                                that leverage deep learning models to analyze radiological scans, enabling non-invasive, 
                                accurate, and early detection of conditions such as liver cirrhosis, fibrosis, and 
                                hepatocellular carcinoma (HCC). I showcased my contributions to CirrMRI600+, a novel liver 
                                cirrhosis dataset, along with cutting-edge segmentation architectures like SynergyNet and 
                                PVTFormer, which improve organ delineation and disease quantification. Additionally, 
                                I discussed how multi-modal AI models, combining radiology and clinical data, enhance 
                                diagnostic precision beyond conventional imaging techniques. The talk also highlighted the 
                                role of diffusion models, transformer-based architectures, and self-supervised learning in 
                                advancing liver disease detection. This research aims to bridge AI and clinical practice, 
                                reducing reliance on biopsies and enabling faster,safer, and more accessible liver disease screening.
                            </p>
                            <hr className="border-t border-blue-200 my-4 transform scale-y-50" />
                        </div>

                        <div className="flex flex-col space-y-1 group">
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">The Future is Here: Deep Learning Algorithms Can Reduce the Miss-Rate in Colonoscopy</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-100">
                                < FaLocationDot className="mt-0.5"/>
                                <h1>MIPG Seminar Series 42 – Fall, University of Pennsylvania, USA, 2022</h1>
                            </div>
                            <p className="text-justify ml-1 font-light group-hover:text-blue-50">
                                In this seminar, I discussed the role of deep learning in enhancing polyp detection and 
                                reducing the miss rate in colonoscopy, a critical challenge in gastrointestinal endoscopy. 
                                Traditional colonoscopy procedures rely on expert visual inspection, which can result in 
                                missed lesions due to factors like operator fatigue, poor visibility, or polyp characteristics. 
                                Leveraging deep learning-based computer-aided detection (CADe) and computer-aided diagnosis (CADx) systems, 
                                AI models have demonstrated superior performance in real-time polyp detection, classification, and segmentation. 
                                I presented state-of-the-art deep learning architectures, including convolutional neural networks (CNNs), transformer-based 
                                models, and hybrid approaches, that improve lesion visibility and enhance clinical decision-making. The discussion also covered 
                                domain adaptation, multi-center dataset challenges, and the integration of AI-powered systems into existing clinical workflows. 
                                Additionally, I highlighted the importance of interpretability, robustness against adversarial attacks, and regulatory considerations 
                                for deploying AI in endoscopy.
                            </p>
                            <hr className="border-t border-blue-200 my-4 transform scale-y-50" />
                        </div>

                        <div className="flex flex-col space-y-1 group">
                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-200">
                                <FaCircleDot className="mt-0.5"/>
                                <h1 className="font-semibold">Khwopa to Northwestern: My PhD Journey and Some Personal Reflections</h1>
                            </div>

                            <div className="flex flex-row items-center gap-2 group-hover:text-blue-100">
                                < FaLocationDot className="mt-0.5"/>
                                <h1>Khowpa Engineering College, Purbanchal University, Bhaktapur, Nepal, 2022.</h1>
                            </div>
                            <p className="text-justify ml-1 font-light group-hover:text-blue-50">
                                I share my academic and professional journey from Khwopa Engineering College in Nepal to 
                                Northwestern University in the USA. This journey has been shaped by perseverance, passion 
                                for artificial intelligence in medical imaging, and a commitment to impactful research. 
                                I reflect on the challenges and opportunities that defined my path, from earning a PhD at 
                                Simula Research Laboratory & UiT The Arctic University of Norway to contributing groundbreaking 
                                AI-driven innovations in radiology, gastrointestinal endoscopy, and precision medicine at 
                                Northwestern University. I discuss how my early education at Khwopa Engineering College laid a 
                                strong foundation, fostering the discipline and curiosity that propelled me into the global 
                                research landscape. Through my experiences working on open-access medical imaging datasets, 
                                developing AI models for disease detection, and collaborating with leading experts, I highlight 
                                the key lessons learned, including the importance of resilience, mentorship, and interdisciplinary collaboration. This talk is a personal reflection on the transition from a small-town student to a recognized researcher, offering insights for aspiring scholars navigating similar academic and professional journeys.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default WorkShops;
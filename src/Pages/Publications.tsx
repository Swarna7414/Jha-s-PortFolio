import React from "react";
import "../Styles/animation.css"
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { AComprehensiveanalysis, AComprehensiveStudy, Anextensivestudey, Comparativevalidation, Diagnosis, DoubleUNet, Exploring, FANet, HyperKvasir, Kvasir, KvasirCapsule, LightLayers, MachineLearningbasedClassification, MetaLearning, MSRF, NanoNet, PolypGen, Progressively, RealTimePolypDetection, ResUNet, TextGuided, TheEndoText, Validatingpolyp } from "../Services/PublicationsLinks";

const DevelopPublicatons: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col scrollbar-hide text-white p-3">
      <h1 className="text-4xl text-center hover:text-blue-200 duration-300 cursor-pointer p-3 mb-3">
        Journal Articles & Conference Papers
      </h1>

      <div className="flex flex-col xl:flex-row gap-2 mt-2">
        
        <div className="flex flex-col xl:w-1/2">
          <h1 className="text-3xl ml-2 hover:text-blue-200 cursor-pointer mb-2">Journals</h1>

          
          <div className="w-full max-h-[75vh] overflow-y-auto text-white border-2 p-2 space-y-2 rounded-2xl hover:shadow-md shadow-white scrollbar-hide">
            <div>
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg mt-1" onClick={Validatingpolyp}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                      Validating polyp and instrument segmentation methods in colonoscopy 
                      through Medico 2020 and MedAI 2021 Challenges
                      </span>,”Medical Image Analysis, 2024.
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={MachineLearningbasedClassification}>
                <IoMdArrowDroprightCircle className="text-xl mt-1 transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Machine Learning-based Classification, Detection, and Segmentation of Medical Images
                    </span>”PhD Thesis, 2022.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={AComprehensiveanalysis}>
                <IoMdArrowDroprightCircle className="text-2xl mt-0.5 transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                      A Comprehensive analysis of classification methods in gastrointestinal endoscopy imaging
                    </span>,”Medical Image Analysis, vol. 70, 2021.
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={AComprehensiveStudy}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                      A Comprehensive Study on Colorectal Polyp segmentation with ResUNet++, Conditional Random Field and Test-Time Augmentation
                    </span>,”IEEE Journal of Biomedical and Health Informatics, 2021.
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={RealTimePolypDetection}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Real-Time Polyp Detection, Localization and Segmentation in Colonoscopy Using Deep Learning
                  </span>,”IEEE Journal of Biomedical and Health Informatics, 2021.
                </h1>
              </div>
              
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={PolypGen}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    PolypGen: A multi-center polyp detection and segmentation dataset for generalisability assessment
                    </span>,"Nature Scientific Data, 2023.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={HyperKvasir}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  H. Borgli*, V. Thambawita*, P. Smedsrud*, S. Hicks*, D. Jha*, S. Eskeland, et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Hyper-Kvasir: A Comprehensive Multi-Class Image and Video Dataset for Gastrointestinal Endoscopy
                  </span>,"Nature Scientific Data [Contributed equally], 2020.
                </h1>
              </div>
              
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={KvasirCapsule}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  P. Smedsrud*, H. Gjestang*, O. Nedrejord*, E. Nss*, V. Thambawita*, S. Hicks*, HBorgli*, D. Jha*, et al.,"
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                  Kvasir-Capsule, a video capsule endoscopy dataset
                  </span>,"Nature Scientific Data, [equally contributed], 2021.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={FANet}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  N. Tomar, D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    FANet: A Feedback Attention Network for Improved Biomedical Image Segmentation
                  </span>,”IEEE Transactions on Neural Networks and Learning Systems, 2022.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={MSRF}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  A Srivastava, D. Jha et al,”
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    MSRF-Net: A Multi-Scale Residual Fusion Network for Biomedical Image Segmentation
                  </span>,”IEEE Journal of Biomedical and Health Informatics, 2022.
                 </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Comparativevalidation}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  T. Ross, A. Reinke, D. Jha et al.“
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Comparative validation of multi-instance instrument segmentation in endoscopy: results of the ROBUST-MIS 2019 Challenge
                  </span>”,Medical Image Analysis, vol. 70, 2021.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Diagnosis}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Diagnosis of Alzheimer’s Disease Using Dual-Tree Complex Wavelet Transform, PCA, and Feed-Forward Neural Network,”
                  </span>,” Journal of Healthcare Engineering, vol. 2017, 13 pages, 2017.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Anextensivestudey}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  V. Thambawita, D. Jha et al, “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    An Extensive Study on Cross-Dataset Bias and Evaluation Metrics Interpretation for Machine Learning Applied to Gastrointestinal Tract Abnormality Classification
                  </span>,”ACM Transaction on Computing for Healthcare, vol. 1, no. 3, 2021.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={MetaLearning}>
                <IoMdArrowDroprightCircle className="mt-0.5 text-2xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  R. Khadka, D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Meta-learning with implicit gradients in a few-shot setting for medical image segmentation
                  </span>“, Computers in Biology and Medicine, 2022.
                </h1>
              </div>

            </div>
          </div>
        </div>

        
        <div className="flex flex-col xl:w-1/2">
          <h1 className="text-3xl ml-2 hover:text-blue-200 cursor-pointer mb-2">Conferences</h1>

          
          <div className="w-full max-h-[75vh] overflow-y-auto text-white border-2 p-2 space-y-2 rounded-2xl hover:shadow-md shadow-white scrollbar-hide">
            <div>
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg mt-1" onClick={DoubleUNet}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                       DoubleU-Net: A Deep Convolutional Neural Network for Medical Image Segmentation
                      </span>,” Proceedings of Computer Based Medical System (CBMS), 2020. 
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Kvasir}>
                <IoMdArrowDroprightCircle className="text-2xl mt-1 transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Kvasir-SEG: A segmented polyp dataset
                    </span>,”Proceedings of IEEE International Symposium on Multimedia (ISM 2019), pp. 225-230, 2019. 
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={ResUNet}>
                <IoMdArrowDroprightCircle className="text-3xl mt-0.5 transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                      ResUNet++: An advanced architecture for medical image segmentation
                    </span>,”Proceedings of IEEE International Symposium on Multimedia (ISM 2019), pp. 225-230, 2019. 
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={NanoNet}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                  <h1 className="cursor-pointer ml-2">
                    D. Jha et al., “
                    <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                      NanoNet: Real-Time Polyp Segmentation in VideoCapsule Endoscopy and Colonoscopy
                    </span>,”Proceedings of IEEE Computer Based Medical System (CBMS), IEEE, 2021.
                  </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={LightLayers}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                   LightLayers: Parameter Efficient Dense and Convolutional Layers for Image Classification
                  </span>,” Proceedings of The Joint International Conference PDCAT-PAAP2020, Springer, 2020.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={TheEndoText}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  S. A. Hicks, D. Jha, V. Thambawita, P. Halvorsen and M. Riegler, “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                   The EndoTect 2020 Challenge: Evaluation and Comparison of Classification, Segmentation and InferenceTime for Endoscopy
                  </span>,” Proceedings of ICPR workshop, 2020.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Progressively}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  GP. Ji, YC. Chou, DP. Fan, G. Chen, H. Fu, D. Jha, and L. Shao,“
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                     Progressively Normalized Self-Attention Network for Video Polyp Segmentation
                    </span>Proceedings of Medical Image Computing and Computer Assisted Intervention (MICCAI ), 2021.
                </h1>
              </div>
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={TextGuided}>
                <IoMdArrowDroprightCircle className="text-4xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  N. K Tomar, D. Jha, U. Bagci, Sharib Ali,“
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                     Text-guided attention for improved polyp segmentation
                  </span>,"Proceedings of Medical Image Computing and Computer Assisted Intervention (MICCAI ), 2022.
                </h1>
              </div>
              
              
              <div className="group hover:scale-[0.98] transition-transform duration-200 flex flex-row items-start text-lg" onClick={Exploring}>
                <IoMdArrowDroprightCircle className="text-3xl transition-colors duration-200 group-hover:text-blue-400 cursor-pointer" />
                <h1 className="cursor-pointer ml-2">
                  D. Jha et al., “
                  <span className="font-semibold hover:underline cursor-pointer group-hover:text-blue-400 text-blue-200">
                    Exploring Deep Learning Methods for Real-Time Surgical Instrument Segmentation in Laparoscopy
                  </span>,”IEEE BHI, 2021.
                </h1>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevelopPublicatons;

import React from 'react';
import smallscreen from '../assets/smallscreen.png';
import "../Styles/global.css"
import BigScreenRe from '../assets/Bigscreen-preview.png';
import "../Styles/animation.css";
import "../Styles/component.css";
import "../Styles/global.css";
import cursorImage from '../assets/cursor.png';
import { FaGoogleScholar } from "react-icons/fa6";
import { SiResearchgate } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiSemanticscholar } from "react-icons/si";
import { SiDblp } from "react-icons/si";
import { SiOrcid } from "react-icons/si";
import { SiClarivate } from "react-icons/si";
import { Clarivate, Dblb, Github, GoogleScholr, Linkedin, Orcid, ResearchGate, Semanticscholar, Twitter } from '../Services/Calls';



const Develop: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col xl:flex-row scrollbar-hide">
      
      
      <div className="xl:w-1/2 w-full">
        
        <img
          src={smallscreen}
          alt="Profile Small"
          className="block xl:hidden w-60 sm:w-64 mx-auto mt-6"
        />
        
        <img
          src={BigScreenRe}
          alt="Profile Large"
          className="hidden xl:block w-full h-full object-cover"
          style={{ minHeight: '100%' }}
        />
      </div>

      
      <div className="xl:w-1/2 w-full flex flex-col cursor-pointer">
        <div className="flex flex-col p-4 min-h-screen">
          
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-2 ml-2.5">
            Hello I'm{' '}
            <span
              className="group inline-flex items-center cursor-pointer hover:text-emerald-400  duration-300 font-bold hover-text-shadow"
              >
                Dr. Debesh Jha
              <span className="ml-2 wave-on-hover">👋</span>
            </span>
          </h1>


          <div className="p-4 text-black custom-cursor" style={{ cursor: `url(${cursorImage}) 16 16, auto` }}>
            <p className="text-lg font-medium text-justify leading-relaxed">
              I'm a Visiting Assistant Professor in the Department of Computer Science at the University of South Dakota. 
              Recognized among the world’s top 2% scientists by Stanford University and Elsevier ranking for contributions 
              to AI in biomedical engineering, my research primarily focuses on developing advanced artificial intelligence 
              algorithms to enhance medical imaging and diagnostics across a range of clinical domains. 
              These include gastrointestinal (GI) tract imaging, liver and lung tumor analysis, and predictive modeling for radiation therapy outcomes. 
              Recognizing the limitations in current diagnostic systems—such as data scarcity, variability, and limited generalizability—I focus on creating robust, 
              diverse, and multinational datasets like CirrMRI600+, PolypDB, PolypGen, Kvasir-SEG, HyperKvasir, and KvasirCapsule.
            </p>

            <p className="mt-3 text-lg font-medium text-justify leading-relaxed">
              To tackle clinical challenges, I design novel segmentation models including ResUNet++, DoubleUNet, ColonSegNet,
              and transformer-based architectures that significantly improve diagnostic accuracy. Notably, my ColonSegNet model
              and Kvasir-SEG dataset have been featured by NVIDIA Clara. I'm deeply motivated to create AI tools that function
              as reliable diagnostic assistants, supporting radiologists in delivering better, faster, and more consistent care.
              Beyond segmentation, my interests span vision-language models, anomaly detection, foundation models, ethical AI,
              and non-invasive diagnostics. I also explore AI applications in surgery, precision oncology, and even sports analytics.
              My goal is to bridge the gap between cutting-edge AI and real-world healthcare impact, ensuring safer, fairer, and
              more effective medical decision-making.
            </p>
            <div className='mt-4 flex flex-row-reverse sm:gap-8 text-4xl gap-1.5 self-center'>

              <div className="border rounded-full hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500">
                <RiTwitterXLine
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer  hover:text-emerald-500"
                  onClick={Twitter}/>
              </div>

              <div className="border rounded-full hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500">
                <FaLinkedin
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={Linkedin}/>
              </div>

              <div className="border rounded-full hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500">
                <FaGithub
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={Github}/>
              </div>

              <div className="border rounded-full hover:border-emerald-500 hover:shadow-sm hover:shadow-emerald-500">
                <SiClarivate
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={Clarivate}/>
              </div>

              <div className="border rounded-full hover:shadow-sm hover:border-emerald-500 hover:shadow-emerald-500">
                <SiOrcid
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={Orcid}/>
              </div>

              <div className="border rounded-full hover:shadow-sm hover:border-emerald-500 hover:shadow-emerald-500">
                <SiDblp
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-blue-300 cursor-pointer hover:text-emerald-500"
                  onClick={Dblb}/>
              </div>
              <div className="border rounded-full hover:shadow-sm hover:border-emerald-500 hover:shadow-emerald-500">
                <SiResearchgate
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={ResearchGate}/>
              </div>
              <div className="border rounded-full hover:shadow-sm hover:border-emerald-500 hover:shadow-emerald-500">
                <SiSemanticscholar
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={Semanticscholar}/>
              </div>
              <div className="border rounded-full hover:shadow-sm hover:border-emerald-500 hover:shadow-emerald-500">
                <FaGoogleScholar
                  className="text-4xl sm:text-4xl p-2 sm:p-1.5 text-black rounded-full duration-300 hover:border-emerald-300 cursor-pointer hover:text-emerald-500"
                  onClick={GoogleScholr}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Develop;
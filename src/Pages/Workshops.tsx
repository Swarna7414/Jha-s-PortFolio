import React from "react";
import { GrWorkshop } from "react-icons/gr";
import { LiaDotCircleSolid } from "react-icons/lia";
import { ImageCELF, InternationalEndoscopy, Medico, MedicoPoly } from "../Services/WorkshopLinks";

const Workshops:React.FC=()=>{
    return(
        <section className="p-5">
            <div className="flex xl:flex-row xl:gap-3 flex-col">
                <div>                    
                    <div className="border-2 rounded-2xl h-auto w-auto xl:mt-5 xl:ml-7 p-5 group hover:border-blue-500 transition cursor-pointer hover:shadow-md hover:shadow-white">
                        <div className="flex items-center font-extrabold group-hover:text-blue-300 transition mb-2">
                            <GrWorkshop className="mr-2"/>
                            <h1>Workshops</h1>
                        </div>

                        <div className="flex items-center ml-2 hover:text-blue-300" onClick={Medico}>
                            <LiaDotCircleSolid className="mr-2"/>
                            <h1>Medico: Transparency in Medical Image Segmentation</h1>
                        </div>

                        <div className="flex items-center ml-2 hover:text-blue-300" onClick={MedicoPoly}>
                            <LiaDotCircleSolid className="mr-2"/>
                            <h1>Medico automatic polyp segmentation challenge</h1>
                        </div>

                        <div className="flex items-center ml-2 hover:text-blue-300">
                            <LiaDotCircleSolid className="mr-2"/>
                            <h1>EndoTect Challenge</h1>
                        </div>

                        <div className="flex items-center ml-2 hover:text-blue-300" onClick={InternationalEndoscopy}>
                            <LiaDotCircleSolid className="mr-2"/>
                            <h1>3rd International Endoscopy Computer Vision <br />Challenge and Workshop.(EndoCV2021)</h1>
                        </div>

                        <div className="flex items-center ml-2 hover:text-blue-300" onClick={ImageCELF}>
                            <LiaDotCircleSolid className="mr-2"/>
                            <h1>ImageCLEF</h1>
                        </div>
                </div>
                </div>
            </div>
        </section>
    );
}
export default Workshops;
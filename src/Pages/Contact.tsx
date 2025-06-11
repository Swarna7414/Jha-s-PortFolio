import React, { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { MdPhone } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "../Styles/style.css";
import { Details, FaceBook, Gmailto, HandleMeet, Instagram, Linkedin, Mailto, Twitter } from "../Services/Calls";

const Contact:React.FC=()=>{

    const [formdata,setformdata]=useState<Details>({
        name:"",
        email:"",
        message:"",
    });

    const HandleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name,value}=e.target;
    setformdata((prev)=>({
        ...prev,
        [name]:value,
    }))

    }

    const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/swarnasaisankar044@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
        body: JSON.stringify(formdata),
        })
        .then((res) => {
            if (res.ok) {
                alert("✅ Message sent successfully to Debesh Jha!");
                    setformdata({
                    name: "",
                    email: "",
                    message: ""
            });
            } else {
                throw new Error("FormSubmit response was not OK.");
            }
        })
        .catch((err) => {
            console.error("Form submission error:", err);
            alert("❌ Something went wrong. Please check your email and try again.");
        });
};


    return(
        <section className="p-5">
            <h1 className="text-center font-bold text-4xl">Let's Get In Touch</h1>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="order-2 lg:order-1 h-full lg:w-1/2 p-2 mt-5 flex flex-col">
                    <h1 className="font-bold text-4xl text-blue-300 cursor-pointer hover:text-blue-400">Contect Me</h1>
                    <div className="flex flex-col mt-5 ml-5 gap-y-8">
                        <div className="flex flex-row items-center  hover:underline hover:underline-offset-6 cursor-pointer">
                            <IoMailOutline className="text-3xl mr-2"/>
                            <h1 className="text-2xl hover-white-shadow">debeshjha1@gmail.com</h1>
                        </div>

                        <div className="flex flex-row items-center hover:underline hover:underline-offset-6 cursor-pointer">
                            <MdPhone className="text-3xl mr-2"/>
                            <h1 className="text-2xl hover-white-shadow">+1 (312) 530-5020</h1>
                        </div>

                        <div className="flex flex-row items-center cursor-pointer">
                            <FaLocationDot className="text-3xl mr-2"/>
                            <h1 className="text-2xl hover-white-shadow">Department of Computer Science, <br />414 E. Clark Street, <br />Vermillion, SD 57069</h1>
                        </div>

                        <div className="flex flex-row items-center justify-center cursor-pointer text-black hover:font-bold duration-300 transition-all">
                            <button className="bg-white w-full h-auto p-3 rounded-2xl hover:bg-blue-100 cursor-pointer" onClick={HandleMeet}>Let's Meet</button>
                        </div>

                    </div>

                    <div className="flex flex-row gap-11 items-center text-4xl ml-4 mt-8 justify-between">
                        <BiLogoGmail className="rounded-full border-2 p-2 hover:bg-white hover:text-black cursor-pointer" onClick={Gmailto}/>
                        <PiMicrosoftOutlookLogo className="rounded-full border-2 p-2 hover:bg-white hover:text-black cursor-pointer" onClick={Mailto}/>
                        <TiSocialLinkedin className="rounded-full border-2 p-2 hover:bg-white hover:text-black cursor-pointer" onClick={Linkedin}/>
                        <RiTwitterXLine className="rounded-full border-2 hover:bg-white hover:text-black p-2 cursor-pointer" onClick={Twitter}/>
                        <FaFacebookF className="rounded-full border-2 p-2 hover:bg-white hover:text-black cursor-pointer" onClick={FaceBook}/>
                        <FaInstagram className="rounded-full border-2 p-2 hover:bg-white hover:text-black cursor-pointer" onClick={Instagram}/>
                    </div>

                </div>
                {/**Second Big Box */}
                <div className="order-1 lg:order-2 h-full w-full p-10">
                    <div className="flex flex-col">
                        <form className="space-y-5" onSubmit={HandleSubmit}>
                            <div className="space-y-4">
                                <label className="text-2xl">Name
                                    <div className="flex flex-row items-center mt-1">
                                        <input name="name" type="text" value={formdata.name} onChange={HandleChange} required
                                        className="p-1.5 border-2 w-full rounded-lg focus:shadow-white focus:shadow-md"/>
                                    </div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <label className="text-2xl">E-Mail
                                    <div className="flex flex-row items-center mt-1">
                                        <input name="email" type="email" value={formdata.email} onChange={HandleChange} required
                                        className="p-1.5 border-2 w-full rounded-lg focus:shadow-white focus:shadow-md focus:bg-black"/>
                                    </div>
                                </label>
                            </div>

                            <div className="space-y-4">
                                <label className="text-2xl">Message
                                    <div className="flex flex-row items-center mt-1">
                                        <textarea name="message" value={formdata.message} onChange={HandleChange}
                                        className="p-1.5 border-2 w-full h-36 rounded-lg focus:shadow-white focus:shadow-md"/>
                                    </div>
                                </label>
                            </div>
                            <button type="submit" className="bg-white text-xl text-black w-full font-semibold rounded-2xl p-3 cursor-pointer hover:shadow-md hover:scale-101 hover:shadow-white duration-100 transition">Send</button>
                        </form>
                    </div> 
                </div>
            </div>
        </section>
    );
}
export default Contact;
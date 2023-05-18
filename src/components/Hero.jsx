import React from "react";
import {MdWeb} from "react-icons/md";
import {TbSword, TbPhotoSensor2} from "react-icons/tb";
import {AiOutlineCheckCircle, AiOutlineWhatsApp} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {BiLike} from "react-icons/bi";
import {FaRegUserCircle} from "react-icons/fa";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import Lottie from "lottie-react";
import animation from "../assets/img/137377-web-design.json";


function Hero(){
    return(
        <>
           
           <section className="hero-section-container">
                
                <div>
                    <div>
                        <h1 className="header-1">Empower your online presence</h1>
                    </div>

                    <div className="hero-cards-container">

                            <div className="hero-card">
                                    <MdWeb className="blue animate"/>
                                    <p className="blue">Websites</p>
                            </div>

                            <div className="hero-card">
                                    <FaRegUserCircle className="blue animate"/>
                                    <p className="blue">UX/UI</p>
                            </div>

                            <div className="hero-card">
                                <FiSearch className="blue animate"/>
                                <p className="blue">SEO</p>
                            </div>

                            <div className="hero-card">
                                <TbPhotoSensor2 className="blue animate"/>
                                <p className="blue">Photography</p>
                            </div>

                            <div className="hero-card">
                                <BiLike className="blue animate"/>
                                <p className="blue">Social Media</p>
                            </div>
                    </div>

                    <div className="hero-buttons-container">
                            <a href="#" className="primary-button">Start your digital Empire <TbSword/> </a>
                            <a href="#" className="secondary-button">Check our work <AiOutlineCheckCircle/> </a>
                    </div>

                </div>

                <div className="Lottie-animation"> 
                    <Lottie

                    animationData = {animation}/>
                    </div>

                    <div className="socials">
                        <a href="#"><FiFacebook/></a>
                        <a href="#"><FiInstagram/></a>
                        <a href="#"><AiOutlineWhatsApp/></a>
                    </div>   

           </section>
        
            
        

        </>
    );
}

export {Hero};
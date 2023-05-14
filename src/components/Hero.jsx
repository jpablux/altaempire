import React from "react";
import {MdWeb} from "react-icons/md";
import {TbSword, TbPhotoSensor2} from "react-icons/tb";
import {AiOutlineCheckCircle, AiOutlineWhatsApp} from "react-icons/ai";
import {FiSearch} from "react-icons/fi";
import {BiLike} from "react-icons/bi";
import {FaRegUserCircle} from "react-icons/fa";
import {FiFacebook, FiInstagram} from "react-icons/fi";


function Hero(){
    return(
        <>
            <div className="hero-banner-container">
                <h1 className="header-1">Empower Your <p className="online">Online</p>Presence</h1>

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

           
    <div className="ag-format-container">
      <div className="ag-orbit_box">
        <div className="ag-orbit_orbit ag-orbit_orbit__outer">
          <div className="ag-orbit_planet ag-orbit_planet__left ag-orbit_planet-1"></div>
          <div className="ag-orbit_planet ag-orbit_planet__right ag-orbit_planet-2"></div>
        </div>

        <div className="ag-orbit_orbit ag-orbit_orbit__inner ag-orbit_orbit__reverse">
          <div className="ag-orbit_planet ag-orbit_planet__left ag-orbit_planet-3 ag-orbit_planet__reverse"></div>
          <div className="ag-orbit_planet ag-orbit_planet__right ag-orbit_planet-4 ag-orbit_planet__reverse"></div>
        </div>
      </div>
    </div>

        <div className="socials">
            <a href="#"><FiFacebook/></a>
            <a href="#"><FiInstagram/></a>
            <a href="#"><AiOutlineWhatsApp/></a>
        </div>

        </>
    );
}

export {Hero};
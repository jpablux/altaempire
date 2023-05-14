import {useState, React} from "react";
import logo from "../assets/img/altaempirelogo.svg";
import {BsArrowRight} from "react-icons/bs";
import {MdOutlineClose} from "react-icons/md";
import {RiMenu4Fill} from "react-icons/ri";
import {FiFacebook, FiInstagram} from "react-icons/fi";
import {AiOutlineWhatsApp} from "react-icons/ai";

function Navbar(){

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = ()=>{
     
        mobileMenu ? setMobileMenu(false):setMobileMenu(true);
        
    }

     

    return(
        <>
        <nav className="navbar-container">
                <a href="#" className="logo-container">
                    <span><img src={logo}></img></span>
                    <p className="titles-1">altaempire</p>
                </a>
                
                <div className="navbar-links">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#" className="contact-button">Contact <BsArrowRight/></a>
                </div>

                <div className="responsive-menu">
                    <button onClick={toggleMenu} className="menu-button">
                        <RiMenu4Fill/>
                    </button>
                </div>
            </nav>

            <nav className={mobileMenu ? 'active':'navbar-responsive-container'}>

                <div className="navbar-responsive">

                    <div className="close-button-container">
                        <button onClick={toggleMenu} className="close-button">
                            <MdOutlineClose/>
                        </button>
                    </div>

                </div> 

                <div className="navbar-responsive-links">
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">Portfolio</a>
                    <a href="#" className="contact-button">Contact <BsArrowRight/></a>
                    <div className="socials-responsive">
                        <a href="#"><FiFacebook/></a>
                        <a href="#"><FiInstagram/></a>
                        <a href="#"><AiOutlineWhatsApp/></a>
                    </div>
                </div>
                
            </nav>
        </>
    );
}

export {Navbar};
import React from "react";

import webIcon from "../assets/img/web-icon.svg";
import uxIcon from "../assets/img/ux-icon.svg";
import seoIcon from "../assets/img/seo-icon.svg";
import photoIcon from "../assets/img/foto-icon.svg";
import likeIcon from "../assets/img/like-icon.svg";


function HeroCard(){
    
const CardData = [{
    index: 0,
    icon: webIcon,
    content: "Websites"
},
{
    index: 1,
    icon: uxIcon,
    content: "UX/UI"
},
{
    index: 2,
    icon: seoIcon,
    content: "SEO"
},
{
    index: 3,
    icon: photoIcon,
    content: "Photography"
},
{
    index: 4,
    icon: likeIcon,
    content: "Social Media"
}

]

    return(

        <>
        {CardData.map((card)=>(
            <div key= {card.index} className="hero-card">
                <img src={card.icon}/>
                <p>{card.content}</p>
                </div>
                ))}
        </>

    );
}

export {HeroCard};
import React from "react";
import { MdWeb } from "react-icons/md";
import {BiLike} from "react-icons/bi";
import {AiOutlineUser,AiOutlineCamera} from "react-icons/ai";
import {TbInputSearch,TbMailForward} from 'react-icons/tb';
import { ButtonCard } from "./ButtonCard";

function Card() {
  const cardsData = [
    {
      index: 0,
      icon: <MdWeb/>,
      title: "Websites",
      description: "Our website development services empower businesses to establish a captivating online presence.",
    },
    {
      index: 1,
      icon: <BiLike/>,
      title: "Social Media",
      description: "Unlock the power of social media with our comprehensive solutions.",
    },
    {
      index: 2,
      icon: <AiOutlineUser/>,
      title: "UX/UI",
      description: "We specialize in crafting exceptional user experiences (UX) and user interfaces (UI).",
    },
    {
      index: 3,
      icon: <AiOutlineCamera/>,
      title: "Photography",
      description: "Our photography services capture the essence of your brand through stunning visuals.",
    },
    {
      index: 4,
      icon: <TbInputSearch/>,
      title: "SEO",
      description: "Boost your online visibility and reach with our expert SEO services.",
    },
    {
      index: 5,
      icon: <TbMailForward/>,
      title: "Email Marketing",
      description: "Maximize your reach and engage your audience with our effective email marketing strategies.",
    },
  ];

  return (
    <>
    {cardsData.map((card) => (
        <div key={card.index} className="card-container">
          <div className="card-title-container">
            <p className="card-title">
            {card.title}
            </p>
            <p className="card-icon">
            {card.icon}
            </p>
          </div>
          <div className="card-description">
            <div className="black-line"></div>
            <p>
              {card.description}
            </p>
          </div>
          <ButtonCard />
    </div>
      ))}
      </>
  );
}

export { Card };

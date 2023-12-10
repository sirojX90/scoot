import React, { useState } from 'react';
import "./Accordion.css";
import dowen from "../../../../../../public/images/icons/dowen.svg"; 
import up from "../../../../../../public/images/icons/up.svg"; 

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    const className = `accordion-item ${isActive ? 'active' : ''}`;

    return (
      <div key={index} className={className}>
        <div className="accordion-title" onClick={() => onTitleClick(index)}>
          {item.title} <img src={isActive ? up : dowen} alt="" />
        </div>
        {isActive && (
          <div className="accordion-content">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return <div className="accordion">{renderItems}</div>;
};

export default Accordion;

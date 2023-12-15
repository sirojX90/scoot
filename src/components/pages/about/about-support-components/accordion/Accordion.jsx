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
        <h6 className="accordion-title dark:bg-slate-700" onClick={() => onTitleClick(index)}>
          {item.title} <img src={isActive ? up : dowen} alt="" />
        </h6>
        {isActive && (
          <div className="accordion-content dark:bg-slate-700">
            <p>{item.content}</p>
          </div>
        )}
      </div>
    );
  });

  return <div className="accordion">{renderItems}</div>;
};

export default Accordion;

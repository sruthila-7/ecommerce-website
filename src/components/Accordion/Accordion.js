import React, { useState} from "react";
import './Accordion.css'

const Accordion = ({header, content,...props }) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleAccordion = (event) => {
      event.stopPropagation();
      setIsOpen(!isOpen);
      };
    
   return (
    <>
        <div className="accordion" onClick={toggleAccordion}>
          <div className="accordion-header" >
            <h5>{header}</h5>
            <span>
               {isOpen ? (
                <i className="fa-solid fa-chevron-down fa-flip-vertical" />
               ) : (
                <i className="fa-solid fa-chevron-up fa-flip-vertical" />
               )}
            </span>
          </div>
          {isOpen && <div className="accordion-content">{content}</div>}
        </div>
    </>
   )
}

export default Accordion;
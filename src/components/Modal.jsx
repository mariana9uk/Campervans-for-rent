import { useState } from "react";
import { Gallery } from "./Images";
import { StyledModal, ToggleSectionsButton } from "./ModalStyled";
import { Features } from "./features";
import Book from "./form";
import { Reviews } from "./reviews";
import Adults from "./Icons/adultsIcon";

export const Modal = ({isOpen, onClose, advert})=>{
  const [activeSection, setActiveSection] = useState('details');

    if (isOpen === false) return null;
   const handleTabClick = (section) => {
      setActiveSection(section);
    };
    return(
        <StyledModal>
            <div> <h1> {advert.name}</h1><button onClick={onClose}>x</button></div>
            <div>
            <div>
            ⭐{advert.raiting}({advert.reviews.length} Reviews)
            
            </div>
            <div>  {advert.location}</div>
            <div>€{advert.price}</div>
            <Gallery images={advert.gallery} />
            <div>
              <p>{advert.description}</p>
            </div>
            <div><ToggleSectionsButton isActive={activeSection === 'details'} onClick={() => handleTabClick('details')}>Features</ToggleSectionsButton> <ToggleSectionsButton isActive={activeSection === 'reviews'} onClick={() => handleTabClick('reviews')}>Reviews</ToggleSectionsButton></div>
            </div>
            <div>
                <div>
            
                {activeSection === 'details' && <Features/>}
                {activeSection === 'reviews' && <Reviews/>}
       
                 </div>
         <Book/>
            </div>
        </StyledModal>
    )
}
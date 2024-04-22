import { Gallery } from "./Images";
import { StyledModal } from "./ModalStyled";
import Book from "./form";

export const Modal = ({isOpen, onClose, advert})=>{
    if (isOpen === false) return null;
    
    return(
        <StyledModal>
            <div> <h1> {advert.name}</h1><button onClick={onClose}>x</button></div>
            <div>
            <div>
              Star {advert.raiting}({advert.reviews.length} Reviews)
            
            </div>
            <div>  {advert.location}</div>
            <div>€{advert.price}</div>
            <Gallery images={advert.gallery} />
            <div>
              <p>{advert.description}</p>
            </div>
            <div><button>Features</button> <button>Reviews</button></div>
            </div>
            <div>
                <div></div>
         <Book/>
            </div>
        </StyledModal>
    )
}
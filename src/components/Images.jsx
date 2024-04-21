import { nanoid } from 'nanoid'
import { ImageContainer, ImageStyled, ListImages, ListImagesUl } from './ImagesStyled';
export const Gallery = ({ images }) => {
    return (
      <ListImagesUl>
        {images.map((image) => (
            
        <ListImages key={nanoid()}> <ImageContainer><ImageStyled src={image} alt={`${image}`}/></ImageContainer></ListImages> 
        ))}
      </ListImagesUl>
    );
  };
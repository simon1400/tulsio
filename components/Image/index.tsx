import { FC } from "react";
import IImage from "../../interfaces/image";
import { getStrapiURL } from "../../lib/api";

interface ImageProps {
  image: IImage
  svg?: boolean
}

const Image: FC<ImageProps> = ({ image, svg = false }) => {
  const imageUrl = getStrapiURL(image.attributes.url);
  if(svg){
    return (
      <img
        uk-svg=""
        src={imageUrl}
        alt={image.attributes.alternativeText || image.attributes.name}
      />
    );
  }else{
    return (
      <img
        uk-img=""
        src={imageUrl}
        alt={image.attributes.alternativeText || image.attributes.name}
      />
    );
  }

};

export default Image;

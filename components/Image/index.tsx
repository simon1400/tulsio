import { FC } from "react";
import IImage from "../../interfaces/image";
import { getStrapiURL } from "../../lib/api";

interface ImageProps {
  image: IImage
  svg?: boolean
}

const Image: FC<ImageProps> = ({ image, svg = false }) => {
  let imageUrl = '/assets/placeholder.svg'
  if(image?.attributes?.url) {
    imageUrl = getStrapiURL(image.attributes.url);
  }
  if(svg){
    return (
      <img
        uk-svg=""
        src={imageUrl}
      />
    );
  }else{
    return (
      <img
        uk-img=""
        src={imageUrl}
      />
    );
  }

};

export default Image;

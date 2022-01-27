import { getStrapiURL } from "../lib/api";

const Image = ({ image, style, svg = false }) => {
  const imageUrl = getStrapiURL(image.attributes.url);
  if(svg){
    return (
      <img
        uk-svg=""
        src={imageUrl}
        alt={image.alternativeText || image.name}
        style={style}
      />
    );
  }else{
    return (
      <img
        uk-img=""
        src={imageUrl}
        alt={image.alternativeText || image.name}
        style={style}
      />
    );
  }

};

export default Image;

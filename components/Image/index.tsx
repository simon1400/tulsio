import { FC } from "react";
import IImage from '../../interfaces/image'

const APP_API = process.env.APP_API

interface ImageProps {
  image?: IImage
  svg?: boolean
  url?: string
  format?: string
}

const ImageComponent: FC<ImageProps> = ({ 
  image = undefined, 
  url = '/assets/placeholder.svg', 
  svg = false,
  format = ''
}) => {

  let altText = '', caption = ''
  
  if(image){
    url = APP_API+image.attributes.url
    altText = image.attributes.alternativeText
  }
  
  if(svg) return <img uk-svg="" src={url} />
  else return <img src={url+'?format=webp'+format} alt={altText} />
};

export default ImageComponent;

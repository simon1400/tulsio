import { FC } from "react";
import IImage from '../../interfaces/image'

const APP_API = process.env.APP_API

interface ImageProps {
  image?: IImage
  svg?: boolean
  url?: string
}

const ImageCompoennt: FC<ImageProps> = ({ image = undefined, url = '/assets/placeholder.svg', svg = false }) => {
  
  if(image){
    url = APP_API+image.attributes.url
  }
  
  if(svg) return <img uk-svg="" src={url} />
  else return <img src={url} />
};

export default ImageCompoennt;

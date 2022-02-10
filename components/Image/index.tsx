const APP_API = process.env.APP_API

const Image = ({ image, svg = false }) => {
  
  let imageUrl = '/assets/placeholder.svg'
  if(new String(image).indexOf('http') >= 0 && new String(image).indexOf('undefined') < 0){
    imageUrl = image
  }else if(image?.attributes){
    imageUrl = APP_API+image.attributes.url
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

import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      className="uk-img"
      uk-img=""
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
    />
  );
};

export default Image;

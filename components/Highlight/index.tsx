import { connectHighlight } from "react-instantsearch-core";

const Highlight = ({ highlight, attribute, hit }) => {

  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  console.log("hit", hit);
  console.log("parsedHit", parsedHit);
  
  return (
    <>
      {parsedHit.map((part, index) =>{
        console.log("part", part);
        return part.isHighlighted ? <mark key={index}>{part.value}</mark> : <span key={index}>{part.value}</span>
      })}
    </>
  );
};

export default connectHighlight(Highlight);
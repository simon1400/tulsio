import { connectHits } from "react-instantsearch-core";

const FaqHits = ({
  hits
}) => {

  console.log(hits);
  
  return (
    <section></section>
  )
}

export default connectHits(FaqHits)
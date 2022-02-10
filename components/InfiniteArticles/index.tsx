import ArticleShort from "../ArticleShort"
import { connectInfiniteHits } from "react-instantsearch-core";

const InfiniteArticle = ({
  hits,
  hasPrevious,
  hasMore,
  refinePrevious,
  refineNext,
}) => {

  return (
    <section>
      <div className="uk-container uk-container-small">
      
        {!!hits.length && <ArticleShort
          title={hits[0].title}
          link={`/blog/${hits[0].slug}`}
          image={hits[0].image}
          label={hits[0].label[0]?.title}
          text={hits[0].perex}
        />}
      
      </div>
      <div className="uk-container">
        <div className="cat-grid">
          {!!hits.length && hits.splice(1).map(item => <ArticleShort 
            key={item.id}
            title={item?.title}
            link={`/blog/${item.slug}`}
            image={item?.image}
            label={hits[0].label[0]?.title}
          />)}
        </div>
      </div>
    </section>
  )
}

export default connectInfiniteHits(InfiniteArticle)
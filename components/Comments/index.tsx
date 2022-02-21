import Button from "../Button"
import CommentItem from "./CommentItem"

const Comments = () => {
  return (
    <section className="comments">
      <div className="uk-container uk-container-xsmall">
        <div className="coment-control">
          <div>
            <h3>Komentáře</h3>
          </div>
          <div>
            <Button link="/" text="přidat komentář" />
          </div>
        </div>
        <div className="comments-wrap">
          <CommentItem />
        </div>
      </div>
    </section>
  )
}

export default Comments
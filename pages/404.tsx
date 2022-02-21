import Button from "../components/Button"
import Page from "../layout/Page"

const NotFound = () => {
  return (
    <Page title="Not found" notFound>
      <section className="not-found">
        <img src="/assets/404.svg" alt="" />
        <div className="uk-container uk-container-xsmall">
          <p>Jejda, tuto stránku nelze najit. Zkuste vyhledávání nebo zpět na hlavní stranku.</p>
          <Button text="Zobrazit doporučené produkty" link="/" />
        </div>
      </section>
    </Page>
  )
}

export default NotFound
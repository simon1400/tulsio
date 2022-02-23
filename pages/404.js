import Button from "../components/Button"
import Page from "../layout/Page"

const NotFound = () => {
  return (
    <Page title="Not found" notFound>
      <section className="not-found">
        <img src="/assets/404.svg" alt="" />
        <div className="uk-container uk-container-xsmall">
          <p>Jejda, tuto stránku nelze najít. Zkuste vyhledávání nebo zpět na hlavní stránku.</p>
          <Button text="Hlavní stránka" link="/" />
        </div>
      </section>
    </Page>
  )
}

export default NotFound
import { FC } from "react"
import Newsletter from "../../../components/Newsletter"

interface ModalNewsletterProps {
  title: string
}

const ModalNewsletter: FC<ModalNewsletterProps> = ({
  title
}) => {

  return(
    <div id="modal-newsletter" className="uk-flex-top" uk-modal="">
      <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical modal-body-newsletter">

        {/* <button className="uk-modal-close-default" type="button" uk-close=""></button> */}

        <Newsletter title={title} />

      </div>
    </div>
  )
}

export default ModalNewsletter
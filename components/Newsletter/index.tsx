import axios from "axios"
import { FC, useEffect, useRef, useState } from "react"
import validationForm from '../../helpers/validationForm'

const DOMAIN = process.env.APP_DOMAIN

interface NewsletterProps {
  title: string
  link: string
  text: string
}

const Newsletter: FC<NewsletterProps> = ({
  title,
  link,
  text,
}) => {

  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState({
    email: false
  })

  const ref = useRef(null)

  useEffect(() => {
    if(open) {
      ref.current.focus()
    }
  }, [open])

  const onBlur = (type) => {
    validationForm(type, {email}, error, setError);
  }

  const handleButt = (e) => {
    if(error.email) {
      return
    }
    if(!open && !send) {
      setOpen(true)
    }else{
      setOpen(false)
      
      axios.post(`${DOMAIN}/api/subscribe`).then(res => setSend(true))
    }
  }



  return(
    <div className="footer-top">
      <div className="uk-container uk-container-large">
        <div className="newsleter">
          <div className="title">
            <h2>{title}</h2>
            <div className="newsletter-button-wrap">
              <button onClick={(e) => handleButt(e)} className={`button${open ? ' open' : ''}${send ? ' send' : ''}`}>
                {!send && <span>Přihlásit k odběru</span>}
                {send && <span>Děkujeme</span>}
                <img src="/assets/paper-plane.svg" uk-svg="" />
              </button>
              <input 
                className={error.email ? 'error-input' : ''}
                value={email}
                onChange={e => {setEmail(e.target.value); setError({email: false})}}
                placeholder="Vas email" 
                type="email"
                onBlur={() => onBlur('email')}
                ref={ref} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
import axios from "axios"
import { FC, useEffect, useRef, useState } from "react"
import validationForm from '../../helpers/validationForm'

const DOMAIN = process.env.APP_DOMAIN

// interface NewsletterProps {
//   title: string
// }

const Newsletter = ({
  title
}) => {

  const [open, setOpen] = useState(false)
  const [send, setSend] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState({
    email: false
  })

  const ref = useRef(null)

  useEffect(() => {
    if(open) ref.current.focus()
  }, [open])

  const onBlur = (type) => {
    validationForm(type, {email}, error, setError);
  }

  const handleButt = (e) => {
    e.preventDefault()
    if(error.email) {
      return
    }
    if(!open && !send) {
      setOpen(true)
    }else if(!send){
      axios.post(`${DOMAIN}/api/subscribe`, {email}).then(res => {
        setOpen(false)
        setSend(true)
      }).catch(err => console.log(err))
    }
  }

  return(
    <div className="newsleter">
      <div className="newsletter-content">
        <h2>{title}</h2>
        <div className="newsletter-button-wrap">
          <button onClick={e => handleButt(e)} className={`button${open ? ' open' : ''}${send ? ' send' : ''}`} type="button">
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
        <p>Beru na vědomí zpracování osobních údajů. Můžete se podívat <a href="https://www.simplo.cz/zpracovani-osobnich-udaju">jak pracujeme s vašimi daty</a>.</p>
      </div>
    </div>
  )
}

export default Newsletter
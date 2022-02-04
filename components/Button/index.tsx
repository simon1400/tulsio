import { FC } from "react"
import Link from 'next/link'

interface ButtonProps {
  text: string,
  link: string,
  bare?: boolean,
  white?: boolean
  full?: boolean
  native?: boolean
}

const Button: FC<ButtonProps> = ({
  text,
  link,
  bare = false,
  white = false,
  full = false,
  native = false,
}) => {

  const classNames = ['button']

  if(bare) classNames.push('bare')
  if(white) classNames.push('white')
  if(full) classNames.push('full')

  if(native){
    return(
      <a href={link} className={classNames.join(' ')}>
        {text}
      </a>
    )
  }

  return (
    <Link href={link}>
      <a className={classNames.join(' ')}>
        {text}
      </a>
    </Link>
  )
}

export default Button
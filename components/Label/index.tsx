import { FC } from "react"

interface LabelProps {
  text: string
}

const Label: FC<LabelProps> = ({
  text
}) => {
  return (
    <label className="label">{text}</label>
  )
}

export default Label
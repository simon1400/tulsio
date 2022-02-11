import { FC } from "react"
import LabelProps from "../../interfaces/label"
import Link from 'next/link'
import { useRouter } from "next/router"
interface LabelDataProps {
  data: LabelProps
}

const Label: FC<LabelDataProps> = ({
  data
}) => {

  const router = useRouter()

  const handleLink = (e) => {
    e.preventDefault()
    router.push(data.slug)
  }

  return (
    <label className={`label ${data.color}`} onClick={e => handleLink(e)}>
      {data.title}
    </label>
  )
}

export default Label
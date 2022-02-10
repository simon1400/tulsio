import { FC } from "react"
import LabelProps from "../../interfaces/label"
import Link from 'next/link'
interface LabelDataProps {
  data: LabelProps
}

const Label: FC<LabelDataProps> = ({
  data
}) => {
  return (
    <Link href={data.slug}>
      <a>
        <label className={`label ${data.color}`}>
          {data.title}
        </label>
      </a>
    </Link>
  )
}

export default Label
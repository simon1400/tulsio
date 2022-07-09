import { FC } from "react"
import Image from "../Image"

const Banner: FC<{data: any}> = ({
  data
}) => {
  return (
    <div className="banner">
      <a href={data.link}>
        <Image image={data.image.data} />
      </a>
    </div>
  )
}

export default Banner
import { FC } from "react"
import Image from "../Image"

const Banner: FC<{data: any; format?: string}> = ({
  data,
  format
}) => {
  return (
    <div className="banner">
      <a href={data.link} target="_blank">
        <Image format={format} image={data.image.data} />
      </a>
    </div>
  )
}

export default Banner
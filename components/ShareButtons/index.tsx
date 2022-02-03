import {useRouter} from 'next/router'
const DOMAIN = process.env.APP_DOMAIN;

const ShareButton = ({data}) => {

  const router = useRouter()

  return (
    <div className="share-buttons">
      <ul>
        <li>
          <a href={`https://www.facebook.com/sharer.php?u=${DOMAIN}${router.asPath}`} target="_blank">
            <img className="uk-svg" src="/assets/facebook.svg" uk-svg="" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/share?url=${DOMAIN}${router.asPath}&amp;text=${data.title}&amp;hashtags=${data.labels?.data?.[0]?.attributes?.title || ""}`} target="_blank">
            <img className="uk-svg" src="/assets/twitter.svg" uk-svg="" alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ShareButton

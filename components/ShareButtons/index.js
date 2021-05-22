import {useRouter} from 'next/router'

const ShareButton = ({data}) => {

  const router = useRouter()

  return (
    <div className="share-buttons">
      <ul>
        <li>
          <a href={`https://www.facebook.com/sharer.php?u=https:tulsio.hardart.cz${router.asPath}`} target="_blank">
            <img className="uk-svg" src="/assets/facebook.svg" uk-svg="" alt="Facebook" />
          </a>
        </li>
        <li>
          <a href={`https://twitter.com/share?url=http:localhost:3004${router.asPath}&amp;text=${data.title}&amp;hashtags=${data.labels[0].title}`} target="_blank">
            <img className="uk-svg" src="/assets/twitter.svg" uk-svg="" alt="Facebook" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default ShareButton

import '../styles/main.scss'
import { WithGraphQL } from '../lib/api';
import UIkit from 'uikit';

const App = ({ Component, pageProps }) => {
  return (
    <WithGraphQL>
      <Component {...pageProps} />
    </WithGraphQL>
  );
}

export default App

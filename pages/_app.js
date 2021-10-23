import '../styles/main.scss'
import { GraphQLProvider } from '../lib/api';
import UIkit from 'uikit';

function MyApp({ Component, pageProps }) {
  return (
    <GraphQLProvider>
      <Component {...pageProps} />
    </GraphQLProvider>
  );
}

export default MyApp

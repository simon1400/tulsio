import '../styles/main.scss'
import { WithGraphQL } from '../lib/api';
import UIkit from 'uikit';

import { DataProvider } from '../context/dataStateContext'

const App = ({ Component, pageProps }) => {
  return (
    <DataProvider>
      <WithGraphQL>
        <Component {...pageProps} />
      </WithGraphQL>
    </DataProvider>
  );
}

export default App

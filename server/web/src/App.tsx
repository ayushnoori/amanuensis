import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web';
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo';

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme';
import * as theme from 'config/chakra.config';

import FatalErrorPage from 'src/pages/FatalErrorPage';
import Routes from 'src/Routes';

import './index.css';

const extendedTheme = extendTheme(proTheme, theme);

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ColorModeScript />
      <ChakraProvider theme={extendedTheme}>
        <RedwoodApolloProvider>
          <Routes />
        </RedwoodApolloProvider>
      </ChakraProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
);

export default App;

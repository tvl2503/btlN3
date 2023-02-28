import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import AppNavigator from './src/navigators';
import PortalProvider from './src/core/Portal/PortalProvider';
import QueryProvider from './src/helper/QueryProvider';
import initInterceptor from './src/utils/axios';

initInterceptor();
function App(): JSX.Element {
  return (
    <>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <PortalProvider>
            <AppNavigator />
          </PortalProvider>
        </ThemeProvider>
      </QueryProvider>
    </>
  );
}

export default App;

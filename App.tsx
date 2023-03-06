import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';
import AppNavigator from './src/navigators';
import PortalProvider from './src/core/Portal/PortalProvider';
import QueryProvider from './src/helper/QueryProvider';
import initInterceptor from './src/utils/axios';
import { Provider } from 'react-redux';
import store, { persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import ActionProvider from './src/helper/ActionProvider';

initInterceptor();
function App(): JSX.Element {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActionProvider>
            <QueryProvider>
              <ThemeProvider theme={theme}>
                <PortalProvider>
                  <AppNavigator />
                </PortalProvider>
              </ThemeProvider>
            </QueryProvider>
          </ActionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

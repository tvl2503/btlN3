import React, { useEffect } from 'react';
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
import UserProvider from './src/helper/UserProvider';
import SplashScreen from "react-native-splash-screen";

initInterceptor();
function App(): JSX.Element {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ActionProvider>
            <QueryProvider>
              <ThemeProvider theme={theme}>
                <UserProvider>
                  <PortalProvider>
                    <AppNavigator />
                  </PortalProvider>
                </UserProvider>
              </ThemeProvider>
            </QueryProvider>
          </ActionProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;

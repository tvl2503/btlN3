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
import SplashScreen from 'react-native-splash-screen';
import CartProvider from './src/helper/CartProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
                  <CartProvider>
                    <PortalProvider>
                      <SafeAreaProvider>
                        <AppNavigator />
                      </SafeAreaProvider>
                    </PortalProvider>
                  </CartProvider>
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

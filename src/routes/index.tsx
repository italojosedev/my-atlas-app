import {NativeRouter, Route, Link} from 'react-router-native';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';
import {NavigationContainer} from '@react-navigation/native';
import navigationTheme from '../theme/navigationTheme';
export default function Routes() {
  const user = true;

  const routes = user ? AppRoutes : AuthRoutes;
  return (
    <>
      <NavigationContainer theme={navigationTheme}>
        {routes()}
      </NavigationContainer>
    </>
  );
}

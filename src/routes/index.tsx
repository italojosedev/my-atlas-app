import {NativeRouter, Route, Link} from 'react-router-native';
import AuthRoutes from './auth.routes';
import {NavigationContainer} from '@react-navigation/native';
export default function Routes() {
  const user = false;

  const routes = AuthRoutes;
  return (
    <>
      <NavigationContainer>{routes()}</NavigationContainer>
    </>
  );
}

import SignInScreen from '../screens/SignIn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
    </>
  );
}

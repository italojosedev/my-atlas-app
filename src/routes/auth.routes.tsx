import {NavigationProp} from '@react-navigation/native';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
export type ScreenNames = ['SignIn', 'SignUp']; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AuthRoutes() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </>
  );
}

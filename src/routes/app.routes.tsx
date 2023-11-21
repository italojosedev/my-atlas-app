import {NavigationProp} from '@react-navigation/native';
import HomeScreen from '../screens/Home';
import NewPostScreen from '../screens/NewPost';
import EditMyProfileScreen from '../screens/EditMyProfile';
import ProfileScreen from '../screens/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type ScreenNames = [
  'Home',
  'NewPost',
  'Profile',
  'MyProfile',
  'EditProfile',
]; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function StackHome() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </>
  );
}
function StackMyProfile() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="MyProfile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditMyProfileScreen} />
      </Stack.Navigator>
    </>
  );
}

export default function AppRoutes() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Tab.Screen name="Home" component={StackHome} />
        <Tab.Screen name="NewPost" component={NewPostScreen} />
        <Tab.Screen name="MyProfile" component={StackMyProfile} />
      </Tab.Navigator>
    </>
  );
}

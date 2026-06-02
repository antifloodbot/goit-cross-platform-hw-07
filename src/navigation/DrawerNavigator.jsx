import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { colors } from '@/constants/colors';
import ContactScreen from '@/screens/ContactScreen';
import HelpScreen from '@/screens/HelpScreen';
import SettingsScreen from '@/screens/SettingsScreen';

import { SCREENS } from './screens';
import StackNavigator from './StackNavigator';

const Drawer = createDrawerNavigator();
const DRAWER_ROUTES = {
  MAIN: 'Main',
};

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      {/* Drawer navigation holds secondary app sections without crowding the bottom tabs. */}
      <Drawer.Navigator
        screenOptions={{
          drawerActiveBackgroundColor: colors.drawerActiveBackground,
          drawerActiveTintColor: colors.primary,
          drawerInactiveTintColor: colors.text,
          drawerStyle: {
            backgroundColor: colors.drawerBackground,
          },
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.background,
          headerTitleStyle: {
            color: colors.background,
            fontWeight: '700',
          },
          sceneContainerStyle: {
            backgroundColor: colors.secondaryBackground,
          },
        }}
      >
        <Drawer.Screen
          name={DRAWER_ROUTES.MAIN}
          component={StackNavigator}
          options={{ title: 'CoffeeGo' }}
        />
        <Drawer.Screen name={SCREENS.SETTINGS} component={SettingsScreen} />
        <Drawer.Screen name={SCREENS.HELP} component={HelpScreen} />
        <Drawer.Screen name={SCREENS.CONTACT} component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

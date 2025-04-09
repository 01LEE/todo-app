import React from 'react';
import { StyleSheet } from 'react-native';

// react native navigation을 사용하는 데 필요한 import 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 보통의 경우 navigation은 bottom에 쓴다
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// icon을 config에서 받아온다.
import tabConfig from './configs/tabConfig';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      const routeConfig = tabConfig.find((config) => config.name === route.name);

      const iconName = focused ? routeConfig.focusedIcon : routeConfig.unfocusedIcon;
      const IconComponent = routeConfig.iconComponent;



      return <IconComponent name={iconName} size={size} color={color} />

    },

    tabBarLabelStyle: {
      fontSize: 14,
      paddingBottom: 10,
      fontWeight: 'bold'
    },
    tabBarStyle: {
      height: 60
    },
    tabBarInactiveTintColor: '#0163d2',
    tabBarActiveTintColor: 'black',
  });

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        {tabConfig.map((routeConfig) => (
          <Tab.Screen
            key={routeConfig.name}
            name={routeConfig.name}
            component={routeConfig.component}
            options={{ title: routeConfig.title }}
          />
        ))}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import About from '../screens/About';
import Profile from '../screens/Profile';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Animated, Text} from 'react-native';

// const myIcon = <Icon name="comment" size={30} color="#900" />;

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          headerRight: () => (
            <FontAwesome
              name="navicon"
              size={20}
              style={{padding: 20}}
              color="#5a747d"
              onPress={() => console.log('==>>', navigation.openDrawer())}
            />
          ),
          headerStyle: {
            backgroundColor: '#d1d8e3',
          },
        }}
      />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

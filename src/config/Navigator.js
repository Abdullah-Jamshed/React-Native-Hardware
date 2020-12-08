import React from 'react';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home';
import About from '../screens/About';
import Camera from '../screens/Camera';
import Picker from '../screens/Picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const headerStyleOption = ({route, navigation}) => {
  return {
    title: route.name,
    headerRight: () => (
      <FontAwesome
        name="navicon"
        size={20}
        style={{padding: 20}}
        color="#5a747d"
        onPress={() => navigation.openDrawer()}
      />
    ),
    headerStyle: {
      backgroundColor: '#d1d8e3',
    },
  };
};

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={headerStyleOption} />
      <Stack.Screen
        name="About"
        component={About}
        options={headerStyleOption}
      />
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={headerStyleOption}
      />
      <Stack.Screen
        name="Picker"
        component={Picker}
        options={headerStyleOption}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AntDesign name="bars" size={30} color="#333" />
      <Text>Home</Text>
      <Button title="About" onPress={() => navigation.navigate('About')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

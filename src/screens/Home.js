import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View style={styles.btns}>
        <Button title="About" onPress={() => navigation.navigate('About')} />
        <Button title="Camera" onPress={() => navigation.navigate('Camera')} />
        <Button title="Picker" onPress={() => navigation.navigate('Picker')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    flexDirection: 'row',
  },
});

export default Home;

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Camera = () => {
  return (
    <RNCamera type={RNCamera.Constants.Type.back} style={styles.preview} />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
export default Camera;

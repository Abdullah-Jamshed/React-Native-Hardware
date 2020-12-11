import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Map = () => {
  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 24.8825467,
          longitude: 67.0681097,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  map: {
    flex: 1,
    // height: 400,
    // width: 400,
    // ...StyleSheet.absoluteFillObject,
  },
});

export default Map;

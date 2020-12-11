import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const Map = () => {
  const [mar, setMar] = useState({latitude: 24.8825467, longitude: 67.0681097});
  const [region, setRegion] = useState({
    latitude: 24.8825467,
    longitude: 67.0681097,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  const onRegionChange = (region) => {
    setRegion(region);
  };

  return (
    <View style={styles.container}>
      {/* <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 24.8825467,
          longitude: 67.0681097,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      /> */}

      <MapView
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}>

        <Marker
          coordinate={mar}
          title={`Saylani`}
          description={`Saylani discription`}
        />
        
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;

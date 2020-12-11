import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, PermissionsAndroid} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const Map = () => {
  const [location, setLocation] = useState(null);
  const [isGranted, setIsGranted] = useState(null);
  const [region, setRegion] = useState({
    latitude: 24.8825467,
    longitude: 67.0681097,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });

  // const [marker, setMarker] = useState({
  //   latitude: 24.8825467,
  //   longitude: 67.0681097,
  // });

  // const onRegionChange = (region) => {
  //   setRegion(region);
  // };

  useEffect(() => {
    console.log('location ===>>>', location);
  }, [location]);

  const a = async () => {
    const granted = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );

    if (granted) {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation(position.coords);
          console.log(position.coords);
        },
        (error) => {
          // See error code charts below.
          console.log('error');
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
      // console.log('You can use the ACCESS_FINE_LOCATION');
    } else {
      console.log('ACCESS_FINE_LOCATION permission denied');
    }
  };

  useEffect(() => {
    a();
  }, []);

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
        }}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
          title={`Saylani`}
          description={`Saylani discription`}
        />
      </MapView> */}

      {location && (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0421,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
          />
        </MapView>
      )}

      {/* <MapView
        style={styles.map}
        region={region}
        onRegionChange={onRegionChange}>

        <Marker
          coordinate={marker}
          title={`Saylani`}
          description={`Saylani discription`}
        />
      </MapView> */}
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

import React, {useState} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select Aavatar',
  cusomButtons: [{name: 'fb', title: 'chosoe photo from facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const Picker = () => {
  const [response, setResponse] = useState(null);

  return (
    <View>
      <Button
        title="Take image"
        onPress={() =>
          ImagePicker.launchCamera(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponse(response);
            },
          )
        }
      />

      <Button
        title="Select image"
        onPress={() =>
          ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
              setResponse(response);
            },
          )
        }
      />

      <View style={styles.response}>
        <Text>Res: {JSON.stringify(response)}</Text>
      </View>

      {response && (
        <View style={styles.image}>
          <Image
            style={{width: 200, height: 200}}
            source={{uri: response.uri}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    marginVertical: 24,
    marginHorizontal: 24,
  },
  image: {
    marginVertical: 24,
    alignItems: 'center',
  },
  response: {
    marginVertical: 16,
    marginHorizontal: 8,
  },
});

export default Picker;

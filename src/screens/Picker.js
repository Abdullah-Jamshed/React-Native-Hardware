import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
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
  const [response, setResponse] = React.useState(null);

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
    </View>
  );
};

export default Picker;

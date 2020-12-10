import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
// import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

const Home = ({navigation}) => {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  // const saveData = () => {
  //   const user = {name, password};
  //   database().ref().child('/users').push(user);
  // };

  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          let {data} = AccessToken.getCurrentAccessToken().then((data) => {
            fetch(
              `https://graph.facebook.com/${data.userID}?fields=name,birthday,last_name,email&access_token=${data.accessToken}`,
            )
              .then((res) => res.json())
              .then((data) => {
                console.log('user Data ===>', data);
              });
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    auth()
      .signInWithCredential(facebookCredential)
      .then((user) => {
        console.log('user ==>', user);
      })
      .catch((err) => {
        console.log('error ==>', err);
      });
  }

  return (
    <View style={styles.container}>
      {/* <View style={{width: '80%'}}>
        <TextInput
          value={name}
          style={styles.textInp}
          placeholder="name"
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={{width: '80%'}}>
        <TextInput
          value={password}
          style={styles.textInp}
          placeholder="password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
      <Button title="Save Data" onPress={saveData} />
    </View> */}

      <View style={styles.con2}>
        <Button title="facebookLogin" onPress={facebookLogin} />
      </View>
      <Text>Graph API </Text>
      <View style={styles.con2}>
        <Button title=" Facebook Login" onPress={onFacebookButtonPress} />
      </View>
      <Text>Firebase </Text>
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
  textInp: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  con2: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;

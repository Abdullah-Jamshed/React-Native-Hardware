import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';

const Database = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    const user = {name, password};
    database().ref().child('/users').push(user);
  };

  return (
    <View style={styles.container}>
      <View style={{width: '80%'}}>
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
  textInp: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    marginBottom:10
  },
  con2: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Database;

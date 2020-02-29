import React, { useState } from 'react';
import { View, StyleSheet, Button, TextInput, Alert } from 'react-native';
import { THEME } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/actions/user';

export const SignUpScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');

  const users = useSelector(state => state.users.allUsers);

  const register = () => {
    if (users.find(user => user.email === email)) {
      setPassword('');
      setCpassword('');
      return Alert.alert('This email is already used!');
    }

    if (password !== cpassword) {
      setPassword('');
      setCpassword('');
      return Alert.alert('Different passwords');
    }

    const user = {
      email,
      password
    };
    dispatch(registerUser(user));

    Alert.alert('Successfully registered!');

    navigation.navigate('Login');

    setEmail('');
    setPassword('');
    setCpassword('');
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder='Email'
        textContentType='emailAddress'
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm password'
        onChangeText={setCpassword}
        value={cpassword}
        secureTextEntry={true}
      />
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button
            title='Register'
            onPress={() => register()}
            color='green'
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  buttons: {
    marginTop: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  button: {
    marginTop: 20,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden'
  }
});

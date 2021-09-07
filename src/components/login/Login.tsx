import React, { useState } from 'react';
import { Layout, Text, Input, Button } from '@ui-kitten/components';
import { addToken, loginAction } from '../../actions'
import i18n from 'i18n-js';
import { ActivityIndicator } from "react-native";
import { useAppDispatch, useAppSelector } from '../../../hooks';


const Login = () => {
  const [name, changeName] = useState('');
  const [password, changePassword] = useState('');
  const user = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();


  const loginHandler = () => {
    dispatch(loginAction({ Username: name, Password: password }));
  }

    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1' style={{ fontSize: 50, fontFamily: 'serif', marginBottom: 50 }}>coradesk</Text>
        <Input
          placeholder={i18n.t('login.username')}
          value={name}
          onChangeText={nextValue => changeName(nextValue)}
          style={{ width: 300 }}
        />
        <Input
          placeholder={i18n.t('login.password')}
          value={password}
          secureTextEntry={true}
          onChangeText={nextValue => changePassword(nextValue)}
          style={{ marginBottom: 7, marginTop: 7, width: 300 }}
        />
        <Button style={{ width: 300 }} onPress={loginHandler} disabled={user.loginRequest}>
          {user.loginRequest ? <ActivityIndicator size='small' color='#fff' /> : i18n.t('login.login')}
        </Button>
        <Button onPress={() => { dispatch(addToken('test')) }} style={{ width: 300, marginTop: 7 }} status='warning'>
          {i18n.t('login.debug')}
        </Button>

        {user.error &&
          <Text category='h6' status="warning">{user.error}</Text>
        }
      </Layout>
    );
  }



export default Login;
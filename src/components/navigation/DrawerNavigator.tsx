import React, { useEffect, useRef, useState } from 'react'
import Home from '../home/Home'
import { logout } from '../../actions'
import Settings from '../settings/Settings'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { IndexPath, Layout, Drawer, DrawerItem, Text, Icon } from '@ui-kitten/components';
import LogoutConfirm from '../login/logoutConfirm';
import i18n from 'i18n-js';
import { setLocaleAsUpdated } from '../../actions';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const { Navigator, Screen } = createDrawerNavigator();

const Header = () => (
  <Layout style={{ paddingTop: 60, paddingBottom: 20, paddingLeft: 20 }}>
    <Text category='h1' style={{ fontSize: 30, fontFamily: 'serif', margin: 0, padding: 0 }}>coradesk</Text>
  </Layout>
);


const DrawerContent = ({ navigation, state, setLogoutConfirmState }: any) => {
  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => index.row !== state.routeNames.length && navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title={i18n.t('navigation.home')} />
      <DrawerItem title={i18n.t('navigation.settings')} />
      <DrawerItem title={i18n.t('navigation.logout')} onPress={() => setLogoutConfirmState(true)}
        style={{ backgroundColor: 'rgba(255, 0, 0, 0.2)' }} accessoryRight={<Icon name='log-out' />} />
    </Drawer>
  )
};

const DrawerNavigator = ({ navigation }: any) => {
  const [logoutConfirmState, changeLogoutConfirmState] = useState(false);
  const didMountRef = useRef(false)
  const locale = useAppSelector(state => state.locale)
  const dispatch = useAppDispatch();


  const setLogoutConfirmState = (state: any) => {
    changeLogoutConfirmState(state);
  }

  useEffect(() => {
    i18n.locale = locale.locale;
    if (didMountRef.current) {
      componentDidUpdate()
    } else didMountRef.current = true
  })

  const componentDidUpdate = () => {
    if (!locale.localeUpdated) {
      i18n.locale = locale.locale;
      dispatch(setLocaleAsUpdated());
    }
  }

  return (
    <>
      <Navigator
        screenOptions={({ navigation }: any) => ({
          headerShown: false,
          gestureEnabled: true
        })} drawerContent={(props: any) => <DrawerContent {...{ ...props, setLogoutConfirmState }} />}
      >
        <Screen name={i18n.t('navigation.home')} component={Home} />
        <Screen name={i18n.t('navigation.settings')} component={Settings} />
      </Navigator>
      <LogoutConfirm visibility={logoutConfirmState} changeVisibility={setLogoutConfirmState} />
    </>
  );
}


export default DrawerNavigator;
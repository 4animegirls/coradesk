
import React, { Component, useContext, useState } from 'react';
import { Divider, List, ListItem, Toggle, Layout, Icon, TopNavigation, TopNavigationAction, Select, SelectItem, IndexPath } from '@ui-kitten/components';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeContext } from '../../contexts/theme-context';
import { useNavigation } from '@react-navigation/native';
import i18n from 'i18n-js';
import { changeLocale } from '../../actions';
import { connect } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks';

const SettingsScreen = (props: any) => {
  const data = [
    {
      id: 'lang',
      title: i18n.t('settings.lang.title'),
      description: i18n.t('settings.lang.description'),
    },
    {
      id: 'theme',
      title: i18n.t('settings.theme.title'),
      description: i18n.t('settings.theme.description'),
    },
  ];

  const languages = [
    'English',
    'Slovensky',
  ];

  const context = useContext(ThemeContext);

  let locale;
  switch (i18n.locale) {
    case 'en-US': 
      locale = 0;
      break;
    case 'sk-SK':
      locale = 1;
      break;
    default:
      locale = 0;
      break;
  }


  const [checked, changeChecked] = useState(true)
  const [selectedIndex, changeSelectedIndex] = useState(new IndexPath(locale))
  const dispatch = useAppDispatch();



  const setChecked = (checked: any) => {
    changeChecked(checked);
  }

  const setSelectedIndex = (selectedIndex: any) => {
    let locale = 'sk-SK';
    switch (selectedIndex.row) {
      case 0:
        locale = 'en-US';
        break;
      case 1:
        locale = 'sk-SK';
        break;
      default:
        break;
    }

    dispatch(changeLocale(locale));
  }

  const onCheckedChange = (isChecked: any) => {
    context.toggleTheme();
    setChecked(isChecked);
  };

  const renderDarkModeAccessory = () => (
    <Toggle checked={checked} onChange={onCheckedChange} />
  );

  const renderLanguages = (title: any) => (
    <SelectItem title={title} />
  );

  const renderLocalisationAccessory = () => (
    <Select
      value={languages[selectedIndex.row]}
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
      {languages.map(renderLanguages)}
    </Select>
  );

  const renderAccessory = (id: any) => {
    switch (id) {
      case 'lang':
        return renderLocalisationAccessory();

      case 'theme':
        return renderDarkModeAccessory();

      default:
        break;
    }
  }

  const renderItem = ({ item, index }: any) => (
    <ListItem
      title={item.title}
      description={item.description}
      accessoryRight={renderAccessory(item.id)}
    />
  );

  const MenuIcon = (props: any) => (
    <Icon {...props} name='menu-outline' />
  );

  const renderDrawerAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() => props.navigation.openDrawer()} />
  );

    return (
      <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
        <TopNavigation
          title={i18n.t('navigation.settings')}
          accessoryLeft={renderDrawerAction}
        />
        <Divider />
        <Layout style={{ height: '100%' }}>
          <List
            data={data}
            renderItem={renderItem}
          />
        </Layout>
      </SafeAreaView>
    );
};

function Settings(props: any) {
  const navigation = useNavigation();
  return <SettingsScreen {...props} navigation={navigation} />
}


export default Settings;
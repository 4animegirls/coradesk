import React, { useEffect } from 'react';
import { Layout, Text, Divider, Button, Icon, List, ListItem, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { ScrollView, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { itemsAction, addItemsAction, itemsStatesAction } from '../../actions'
import Filter from './Filter'
import Loading from '../loadingPanel/Loading';
import i18n from 'i18n-js';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';


const Home = ({ navigation }: any) => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.user)
  const items = useAppSelector(state => state.items)
  const loading = useAppSelector(state => state.loading)
  const statesFilter = useAppSelector(state => state.statesFilter)
  const searchFilter = useAppSelector(state => state.searchFilter)

  const clickOnListItemAction = (Item: any) => {
    navigation.navigate('Details', Item);
  }

  const renderItemAccessory = (item: any) => (
    <Button onPress={() => clickOnListItemAction(item)} size='tiny'>DETAILS</Button>
  );


  useEffect(() => {
    user.Token !== 'test' && (
      dispatch(itemsAction(user.Token)),
      dispatch(itemsStatesAction(user.Token)))
  });

  const renderItem = ({ item, index }: any) => {

    return (

      <ListItem
        key={`${item.Id}`}
        title={`${item.Name} (${index + 1})`}
        description={`${item.State?.Id} | ${item.CurrentSolver}`}
        accessoryRight={() => renderItemAccessory(item)}
        onPress={() => clickOnListItemAction(item)}
      />
    )
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }: any) => {
    const paddingToBottom = 200 + items.items?.length;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom;
  };


  const MenuIcon = (props: any) => (
    <Icon {...props} name='menu-outline' />
  );

  const renderDrawerAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() => navigation.openDrawer()} />
  );

  const renderFilter = () => (
    <Filter />
  );

  return (
    <>
      <TopNavigation
        title={i18n.t('navigation.home')}
        accessoryLeft={renderDrawerAction}
        accessoryRight={renderFilter}

      />
      <Divider />
      <Layout style={{ alignItems: 'center' }}>
        {items.items !== null
          ?
          <List
            style={{ flex: 1, paddingTop: StatusBar.currentHeight }}
            onScroll={({ nativeEvent }) => {
              if (isCloseToBottom(nativeEvent)) {
                user.Token !== 'test' &&
                  addItemsAction(user.Token, items.page + 1, [searchFilter, ['Id', statesFilter]] as any)
              }
            }}
            scrollEventThrottle={400}
            data={items.items}
            renderItem={renderItem}
          />
          :
          <Text category='h4' style={{ height: Dimensions.get('window').height }}>{i18n.t('home.noitems')}</Text>
        }
        {user.Token === 'test' && <Text category='h4' style={{ height: Dimensions.get('window').height }}>{i18n.t('home.noitems')}</Text>}
        {//(this.props.items.page > 1 && this.props.loading===true) && <Spinner />
        }

      </Layout>
      <Loading />
    </>
  );
}



export default Home;
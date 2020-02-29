import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { List } from '../components/List/List';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { useDispatch } from 'react-redux';
import { signOut } from '../store/actions/user';

export const ListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const allItems = useSelector(state => state.list.allItems);

  const Signout = () => {
    dispatch(signOut());
  };

  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title='Exit' iconName='ios-exit' onPress={() => Signout()} />
      </HeaderButtons>
    )
  });

  return (
    <View style={styles.wrapper}>
      <List data={allItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

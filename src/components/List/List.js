import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Item } from './Item/Item';

export const List = ({ data }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <Item item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: '100%',
    padding: 15
  }
});

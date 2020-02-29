import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { THEME } from '../../../theme';

export const Item = ({ item }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    width: '100%',
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
    borderStyle: 'solid',
    borderRadius: 10
  },
  text: {
    padding: 10,
    color: '#000',
    fontFamily: 'open-regular'
  }
});

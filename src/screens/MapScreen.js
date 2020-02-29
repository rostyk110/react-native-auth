import React from 'react';
import MapView from 'react-native-maps';
import { Dimensions } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

export const MapScreen = ({ navigation }) => {
  const { width, height } = Dimensions.get('window');
  const ASPECT_RATIO = width / height;
  const LATITUDE = 49.83826;
  const LONGITUDE = 24.02324;
  const LATITUDE_DELTA = 0.0922;
  const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

  navigation.setOptions({
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => navigation.openDrawer()}
        />
      </HeaderButtons>
    )
  });

  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA
      }}
    ></MapView>
  );
};

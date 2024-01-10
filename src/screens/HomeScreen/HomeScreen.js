import React, { useState, useMemo } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'
import { Auth } from 'aws-amplify';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import fuelstations from '../../../data/fuelStations.json'
import CustomMarker from '../../components/CustomMarker';
import FuelStationListItem from '../../components/FuelStationListItem';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

const HomeScreen = () => {

  const signOut = () => {
    Auth.signOut();
  };

  const [selectedFuelStation, setSelectedFuelStation] = useState(null);
  const snapPoints = useMemo(() => ['10%', '50%', '90%'], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <MapView 
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
          latitude: 46.1667,
          longitude: 21.3167,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          {fuelstations.map((fuelstation) => (
            <CustomMarker
              key={fuelstation.id} 
              fuelstation={fuelstation}
              onPress={() => setSelectedFuelStation(fuelstation)}
            />
          ))}
        </MapView>

        {/* Display selected Apartment */}
        {selectedFuelStation && (
          <View style={styles.selectedContainer}>
            <FuelStationListItem
              fuelstation={selectedFuelStation}
            />
          </View>
        )}

        <BottomSheet index={0} snapPoints={snapPoints}>
          <View style={{ flex: 1 }}>
            <Text style={styles.listTitle}>Check all {fuelstations.length} places available</Text>
            <BottomSheetFlatList
              data={fuelstations}
              contentContainerStyle={{ gap: 10, padding: 10 }}
              renderItem={({ item }) => <FuelStationListItem fuelstation={item} />}
            />
            <View style={styles.signOutButton}>
              <CustomButton
                onPress={signOut}
                text="Sign Out" 
                type="PRIMARY"
                fgColor='white'
                bgColor='black'
              />
            </View>
          </View>
        </BottomSheet>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  selectedContainer: {
    position: 'absolute',
    bottom: 100,
    right: 10,
    left: 10,
  },
  listTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 5,
    marginBottom: 20,
  },
  signOutButton:{
    marginHorizontal:10
  },
})

export default HomeScreen
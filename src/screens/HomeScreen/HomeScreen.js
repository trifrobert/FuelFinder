import React, { useState, useMemo, useRef } from 'react'
import { View, StyleSheet, Text, Image, TouchableWithoutFeedback } from 'react-native'
import CustomButton from '../../components/CustomButton/CustomButton'
import CustomMarker from '../../components/CustomMarker';
import CustomSearch from '../../components/CustomSearch';
import FuelStationListItem from '../../components/FuelStationListItem';
import fuelstations from '../../../data/fuelStations.json'
import locationLogo from '../../../assets/location.png'

import { Auth } from 'aws-amplify';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_API_KEY } from '../../../data/environment';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet, { BottomSheetFlatList } from '@gorhom/bottom-sheet';

import Constants from "expo-constants";
import * as Location from 'expo-location';

const HomeScreen = () => {

  const [selectedFuelStation, setSelectedFuelStation] = useState(null);
  const [location, setLocation] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const [startingPointText, setStartingPointText] = useState("");
  const mapRef = useRef(null);

  const snapPoints = useMemo(() => ['10%', '50%', '90%'], []);

  const signOut = () => {
    Auth.signOut();
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.error('Location permission not granted!');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      console.log('Current location:', location.coords);

      // Update the state with the obtained location and set it as the origin
      setOrigin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      // Move the map camera to the current location
      moveTo({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setStartingPointText("Your location");
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };
 
  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const onPlaceSelected = (details, flag ) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
        <MapView 
          ref={mapRef}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
          latitude: 46.1667,
          longitude: 21.3167,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          {origin && <Marker coordinate={origin} />}
          {destination && <Marker coordinate={destination} />}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_API_KEY}
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={traceRouteOnReady}
            />
          )}
          {fuelstations.map((fuelstation) => (
            <CustomMarker
              key={fuelstation.id} 
              fuelstation={fuelstation}
              onPress={() => setSelectedFuelStation(fuelstation)}
            />
          ))}
        </MapView>

        {/* Display selected Fuel Station */}
        {selectedFuelStation && (
          <View style={styles.selectedContainer}>
            <FuelStationListItem
              fuelstation={selectedFuelStation}
            />
          </View>
        )}

        {/* Display the Search Bars container */}
        <View style={styles.search}>
          <View style={styles.searchContainer}>
            <CustomSearch
              placeholder={"Starting point"}
              onPlaceSelected={(details) => {{}
                onPlaceSelected(details, "origin")}}
              marginVertical={3}
              width={'85%'}
            />
            <TouchableWithoutFeedback onPress={getLocation}>
              <Image source={locationLogo} style={styles.locationLogo} resizeMode='contain' />
            </TouchableWithoutFeedback>
          </View>
          <CustomSearch 
            placeholder={"Where do you want to go?"}
            onPlaceSelected={(details) => {{}
              onPlaceSelected(details, "destination")}}
            marginVertical={3}
          />
          <CustomButton
            onPress={traceRoute}
            text="Find the route"
            type="PRIMARY"
            fgColor='white'
            bgColor='black'
            marginVertical={3}
          />
          {distance && duration ? (
          <View style={{flexDirection:"row", justifyContent: 'space-between'}}>
            <Text style={{fontWeight:"bold",}}>Distance: {distance.toFixed(2)} km</Text>
            <Text style={{fontWeight:"bold",}}>
              Duration: {Math.ceil(duration) > 60 ? (Math.ceil(duration)/60).toFixed(2) + " h" : Math.ceil(duration) + " min"}
            </Text>
          </View>
        ) : null}
        </View>

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
  search: {
    position: "absolute",
    alignSelf:'center',
    width: "95%",
    backgroundColor: "white",
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 4,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    justifyContent: 'space-between'
  },
  locationLogo:{
    width: "12%", 
    height: "90%",
    backgroundColor: "#f8f8f8",
    borderColor: "black",
    borderWidth: 1.5,
    borderRadius: 5,
    marginVertical: 3,
    marginHorizontal: 3,
  }
})

export default HomeScreen
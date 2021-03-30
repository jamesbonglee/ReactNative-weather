import { StatusBar } from "expo-status-bar";
import { Alert } from "react-native";
import React from "react";
import Loading from "./Loading";
import * as Location from "expo-location";
// import dotenv from "dotenv";
import axios from "axios";

const API_KEY = "86d7200d4ca48e04f3e196cea35d2372";
// const API_KEY = process.env.WEATHER_KEY;

export default class extends React.Component {
   state = {
      isLoading: true,
   };

   getWeather = async (latitude, longitude) => {
      const { data } = await axios.get(
         `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
      );
      console.log(data);
   };
   getLocation = async () => {
      try {
         await Location.requestPermissionsAsync();
         const {
            coords: { latitude, longitude },
         } = await Location.getCurrentPositionAsync();
         //send to API and get weather , coords:{latitude,longitude} == coords.latitude, coords.longitude
         this.getWeather(latitude, longitude);
         this.setState({ isLoading: false });
      } catch (error) {
         Alert.alert("can't find U", "So sada");
      }
   };
   componentDidMount() {
      this.getLocation();
   }
   render() {
      const { isLoading } = this.state;
      return isLoading ? <Loading></Loading> : null;
   }
}

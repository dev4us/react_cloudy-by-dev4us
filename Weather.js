import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const weatherCases = {
    Rain:{
        colors:["#00C6FB", "#005BEA"],
        title: "Raining like a MF",
        subtitle: "For more info look outside",
        icon: "weather-rainy"
    },
    Clear:{
        colors:["#FEF253", "#FF7300"],
        title: "SUNNY as fuck",
        subtitle: "go get your ass burn",
        icon: "weather-sunny"
    },
    Thunderstorm:{
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm as fuck",
        subtitle: "go get your ass storm",
        icon: "weather-lightning" 
    },
    Clouds:{
        colors:["#D7D2CC", "#304352"],
        title: "Clouds as fuck",
        subtitle: "go get your ass cloud",
        icon: "weather-cloudy" 
    },
    Snow:{
        colors:["#7DE2FC", "#304352"],
        title: "Snow as fuck",
        subtitle: "go get your ass Snow",
        icon: "weather-snoyw" 
    },
    Drizzle:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Snow as fuck",
        subtitle: "go get your ass Drizzle",
        icon: "weather-hail" 
    },    
    Haze:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Haze as fuck",
        subtitle: "안개가 도래햇다!",
        icon: "weather-windy" 
    },
    Mist:{
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist as fuck",
        subtitle: "go get your ass mist",
        icon: "weather-fog" 
    },    
}

function Weather({weatherName, temp}){
    return(
        <LinearGradient colors={weatherCases[weatherName].colors} style={styles.container}>
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherCases[weatherName].icon}/>
                <Text style={styles.temp}>{temp}˚</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
            </View>
        </LinearGradient>     
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    weatherName: PropTypes.string.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: width
    },
    upper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"transparent"
    },
    temp:{
        fontSize: 48,
        backgroundColor:"transparent",
        color:"white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 40
    }
});
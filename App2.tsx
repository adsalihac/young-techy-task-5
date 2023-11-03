import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [bulbOne, setBulbOne] = useState(false); // Store 
  const [bulbTwo, setBulbTwo] = useState(false); // Store 


  useEffect(() => {
    console.log("Screen Start");
    return () => {
      
    }
  }, [bulbOne])
  

  useEffect(() => {
    // console.log(bulbOne, "bulbOne");
    // if (bulbOne === true) {
    //   setBulbTwo(!bulbTwo);
    // }
    console.log("Use Effect 1 called");
    
    if(bulbOne) {
      alert("bulb 1 is on")
    }
  }, [bulbOne]);

  React.useEffect(() => {
   console.log("USE EFFECT 2");
  }, [bulbTwo]);

  // useEffect(() => {
  //   // first
  //   console.log("First");

  //   return () => {
  //     // second
  //   console.log("Second");
  //   }
  // }, [])

  // 1 - screen open
  // 2 - return screen
  // 3 - dependency - state change

  // Examples
  // API CALLING


  return (
    <View>
      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          backgroundColor: "red",
        }}
        onPress={() => {
          setBulbOne(!bulbOne);
        }}
      ></TouchableOpacity>
      <Text>{bulbOne ? "Bulb One ON" : "Bulb One OFF"}</Text>
      <Text>{bulbTwo ? "Bulb Two ON" : "Bulb Two OFF"}</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});

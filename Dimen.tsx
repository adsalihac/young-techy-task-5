import { StyleSheet, View , Dimensions } from 'react-native'
import React from 'react'

const App = () => {

  const windowWidth = Dimensions.get('screen').width;
  const windowHeight = Dimensions.get('screen').height;

  return (
    <View style={{
      marginTop:30
    }}>
      <View style={{
        marginTop:10,
        width:windowWidth - 20,
        height:200,
        backgroundColor:"red",
        borderRadius:10,
        alignSelf:'center'
      }}>

      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
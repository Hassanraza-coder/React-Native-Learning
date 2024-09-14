import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

const CardComponent = () => {
  return (
    <View style={Style.bodystyle} >
      <Image source={require('../assets/images/profile.jpeg')} style={Style.imagestyle} />
      <Text style={Style.textstyle}>Hassan Web</Text>
      <Text style={Style.textstyle}>I Am Hassan Raza WebDev</Text>
      <Button title='press me'  />

    </View>
  )
};

const Style = StyleSheet.create({
  bodystyle: {
    borderBlockColor: 'black',
    width: 400,
    height: 500,
    backgroundColor: "teal",
    display: "flex",
    alignItems: 'center',
    justifyContent: 'space-around'

  },
  imagestyle: {
    borderRadius: 100,
    width: 200,
    height: 200

  },
  textstyle: {
    fontSize: 30,
    color: 'white'
  },
  buttonstyle: {
    color: 'teal'
  }

})

export default CardComponent
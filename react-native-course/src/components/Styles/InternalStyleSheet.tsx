import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const InternalStyleSheet = () => {
  return (
    <View style={styles.bodystyle}>
      <Text style={styles.textstyle} >InternalStyleSheet</Text>
    </View>
  )
};

const styles =  StyleSheet.create({
    textstyle:{
        color:"red",
        backgroundColor:"yellow",
        fontSize:30,
        margin:20,
        padding:20
    },
    bodystyle:{
        backgroundColor:"green"
    }
})

export default InternalStyleSheet
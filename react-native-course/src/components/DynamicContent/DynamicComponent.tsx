import { View, Text } from 'react-native'
import React from 'react'

const DynamicComponent = () => {

    const username = 'Hassan Raza'
  return (
    <View>
      <Text>My name is {username}</Text>
    </View>
  )
}

export default DynamicComponent
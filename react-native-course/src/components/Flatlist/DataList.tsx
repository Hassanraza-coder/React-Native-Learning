import { View, Text, FlatList } from 'react-native'
import React from 'react'

const DataList = () => {
    const fruits = ['apple','banana','mango']
  return (
    <View>
     <FlatList data={fruits} 
     keyExtractor={(item)=> item}
     renderItem={({item})=>{
        return <Text>{item}</Text>
     }} />
    </View>
  )
}

export default DataList
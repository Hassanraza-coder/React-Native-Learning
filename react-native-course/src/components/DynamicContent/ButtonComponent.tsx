import { View, Text, Button, Pressable } from 'react-native'
import React from 'react'

const ButtonComponent = () => {
    return (
        <View>
            {/* <Button title='press me' color="green" /> */}


            {/* Events */}

            {/* Onpress Event */}

            {/* <Button
            title='Click and Check Console'
            title='alert'
            onPress={()=>{console.log('Clicked')}}
            onPress={() => { console.warn('Clicked') }}
            onPress={()=> alert("you pressed me")}
            /> */}


            {/* Pressable */}

            <Pressable onPress={() => { console.log("Clicked") }}>
                <Text style={{color:"teal"}}>Click me</Text>
            </Pressable>
            <Pressable onPressIn={() => { console.log("on press in") }}>
                <Text style={{color:"yellow"}}>Click me</Text>
            </Pressable>
            <Pressable onPressOut={() => { console.log("on press out") }}>
                <Text style={{color:"green"}}>Click me</Text>
            </Pressable>
            <Pressable onLongPress={() => { console.log("on long press") }}>
                <Text style={{color:"purple"}}>Click me</Text>
            </Pressable>
        </View>
    )
}

export default ButtonComponent
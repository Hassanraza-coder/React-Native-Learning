import { View, Text, Image } from 'react-native'
import React from 'react'

const ImageComponents = () => {
    return (

        <View>
            <Text>let's explore images</Text>


            {/* <Image
                source={require('../assets/images/download.png')}
                style={{ width: 300, height: 300 }}
            /> */}
            <Image
                source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
                style={{ width: 200, height: 200 }}
            />
        </View>


    )
}

export default ImageComponents
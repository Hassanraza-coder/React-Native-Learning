import { View, Text, FlatList } from 'react-native'
import React from 'react'

const ArrayOFObject = () => {
    const location = [
        {
            id: 1,
            name: 'Karachi'
        },
        {
            id: 2,
            name: 'Islamabad'
        },
        {
            id: 3,
            name: 'Quetta'
        },
        {
            id: 4,
            name: 'Faisalabad'
        },
        {
            id: 5,
            name: 'Lahore'
        }

    ]
    return (
        <View>

            <FlatList
                data={location}
                keyExtractor={(item) => item.id.toString()}

                renderItem={({ item }) => <Text>{item.name}</Text>}
            />

        </View>
    )
}

export default ArrayOFObject
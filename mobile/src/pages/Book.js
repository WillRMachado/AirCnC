import React from 'react'
import {View, Text} from 'react-native'


export default function Book({navigation}){
const id= navigation.getParam('id')

return <View>
    <Text> olaaaa {id}</Text>
    </View>
}
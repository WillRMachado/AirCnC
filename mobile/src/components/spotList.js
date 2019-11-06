import React, { useEffect } from 'react';
import { View, Text } from 'react-native'
import api from '../services/api'

export default function SpotList({tech}) {


    useEffect(() => {
        const techAjustada = tech.toLowerCase()
        async function loadSpots() {
            const response = await api.get('./spots', {
                params:techAjustada
            })
            console.log("will")
            console.log(response.data)
        }
        loadSpots()
    }, [])


    return (

        <Text>{tech}</Text>
    );
}



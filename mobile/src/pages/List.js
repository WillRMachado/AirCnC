import React, { useState, useEffect } from 'react'
import socketio from 'socket.io-client'
import { SafeAreaView, Image, AsyncStorage, StyleSheet, ScrollView, Alert } from 'react-native'

import SpotList from '../components/spotList'

import logo from '../assets/logo.png'


export default function List() {
    const [techs, setTechs] = useState([])


    useEffect(() => {
        console.log("k12")
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.9:3333', {
                query: { user_id },
                secure: true,
                transports: ['websocket'],
            })
            console.log("k2e")

            socket.on('booking_response', booking => {
                console.log("k3a")

                // Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.spot.date} em ${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })

        })
    }, [])

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagedTechs => {
            const techsArray = storagedTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray)

        })
    }, [])

    return <SafeAreaView style={styles.container}>
        <Image source={logo} style={styles.logo}></Image>

        <ScrollView>

            {techs.map(tech => <SpotList key={tech} tech={tech} />)}
        </ScrollView>
    </SafeAreaView>
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 10,
    },
})
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import api from '../services/api'

export default function SpotList({ tech }) {

    const [spots, setSpots] = useState([])


    useEffect(() => {
        const techAjustada = tech.toLowerCase()
        async function loadSpots() {
            const response = await api.get('./spots', {
                params: { "tech": techAjustada }
            })
            setSpots(response.data)
        }
        loadSpots()
    }, [])


    return (
        <View styles={styles.container}>
            {/* <Text>{tech}</Text> */}
            <Text styles={styles.title}>Empresas que usam {tech} </Text>
            {/* <Text>{spots}</Text> */}


            <FlatList
            styles={styles.list}
            data={spots}
            keyExtractor={spot=>spot._id}
            horizontal
            showsHorizontalScrollIndicator ={false}
            renderItem={({item})=>(
                <View styles={styles.listItem}>
                    <Image style = {styles.thumbanil} source={{uri:item.thumbnail_url}}></Image>
                    <Text>{item.company}</Text>
                    <Text>{item.price ? `R$:${item.price}/dia` : "GRATUITO"}</Text>
                </View>
            )}
            >

            </FlatList>
        </View>
    );
}


const styles = StyleSheet.create({

    // container: {
    //     marginTop: 30,
    // },

    title: {
        fontSize: 20,
        color: "#444",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
})
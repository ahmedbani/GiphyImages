import React from 'react';
import { Image, View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialIcons } from '@expo/vector-icons';

import { addToFavorite, removeFromFavorite, selectIsFavorite } from '../modules/favorite';
import defaultStyles from '../components/config/styles';

export default function DetailsScreen({navigation,route}) {

    const {url, title, description, type, slug, item} = route.params;
    const isFavorite = useSelector(state => selectIsFavorite (state, item.id))
    const dispatch = useDispatch();

    const addRemoveFav = () =>{
        isFavorite ? dispatch(removeFromFavorite(item.id)) : dispatch(addToFavorite(item))
    }
    return (
        <View style= {styles.container}>
            <Image
            style={styles.image}
            source={{uri:url ,width:300, height: 100}}/>
            <ScrollView style={styles.textContainer}>
                <Text style= {styles.title}>{title}</Text>
                <Text style= {styles.description}>{description}</Text>
                <Text style= {styles.description}>Type: {type}</Text>
                <Text style= {styles.description}>slug: {slug}</Text>
                <Text style= {styles.description}>URL: {url}</Text>
            </ScrollView>
            <TouchableOpacity style= {styles.favorite} onPress={addRemoveFav}>
                <MaterialIcons name="favorite" size={24} color={isFavorite ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: '100%',
        height: 300,
    },
    textContainer: {
        padding:20,
    },
    title : {
        fontSize: 24,
        fontWeight: '600'
    },
    description: {
        color: defaultStyles.colors.primary,
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    favorite: {
        width: 40,
        height: 40,
        backgroundColor: defaultStyles.colors.white,
        position: 'absolute',
        right: 0,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
        
    }
})

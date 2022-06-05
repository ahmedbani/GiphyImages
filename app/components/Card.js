import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { addToFavorite, removeFromFavorite, selectIsFavorite } from '../modules/favorite';
import defaultStyles from './config/styles';

function Card({title, image, description, item, onPress}) {

    const isFavorite = useSelector(state => selectIsFavorite (state, item.id))
    const dispatch = useDispatch();

    const addRemoveFav = () =>{
        isFavorite ? dispatch(removeFromFavorite(item.id)) : dispatch(addToFavorite(item))
    }
    return (
        <Pressable style={styles.card} onPress={onPress}>
            <View style= {styles.image}>
                <Image 
                resizeMode= 'contain'
                source={{uri:image ,width:300, height: 100}}
                />
            </View>
            <View style={styles.text}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
            <TouchableOpacity style= {styles.favorite} onPress={addRemoveFav}>
                <MaterialIcons name="favorite" size={24} color={isFavorite ? 'red' : 'black'} />
            </TouchableOpacity>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: defaultStyles.colors.white,
        margin: 15,
        
    },
    text: {
        padding: 20,
    },
    title: {
        fontSize: 20,
        marginBottom: 7,
        color: defaultStyles.colors.black
    },
    description: {
        color: defaultStyles.colors.primary,
        fontWeight: "bold",
    },
    favorite: {
        width: 40,
        height: 40,
        backgroundColor: defaultStyles.colors.white,
        position: 'absolute',
        right: 0.1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
    }
    
})
export default Card;

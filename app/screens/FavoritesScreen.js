import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


import Card from '../components/Card';
import { selectFavorite } from '../modules/favorite';
import defaultStyles from '../components/config/styles';

export default function FavoritesScreen({navigation}) {
    const favorites = useSelector(state => selectFavorite(state))
    console.log(favorites);
    const count = favorites.length;
    return (
        <SafeAreaView>
            <View style= {styles.count}>
                <Text style={defaultStyles.text}>{count ==1 ? `${count} GIF`: `${count} GIFs`}</Text>
            </View>
            <ScrollView style= {styles.card}>
                {favorites.map((image)=>{
                            return(
                                <Card 
                                    key={image?.id}
                                    item={image}
                                    title={image?.title}
                                    image={image?.images?.original.url}
                                    description={image?.user?.description}
                                    onPress={()=> navigation.navigate("Details", {
                                        title : image?.title,
                                        url : image?.images?.original?.url,
                                        description: image?.user?.description,
                                        type: image?.type,
                                        slug: image?.slug,
                                        item: image

                                    })}

                                /> 
                            )
                    })}
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    card: {
        marginTop: 15
    },
    count: {
        justifyContent: 'center',
        marginLeft: 15,
        paddingTop: 15
    }
})

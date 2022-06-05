import React, { useMemo, useState } from 'react';
import { View, StyleSheet, TextInput, SafeAreaView, ScrollView, Image, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Card from '../components/Card';
import { useGetTrendingQuery, useSearchByNameQuery } from '../modules/images';
import defaultStyles from '../components/config/styles';

export default function HomeScreen({ navigation }) {
    const [search, setSearch] = useState('');

    const {data: images = []} = useGetTrendingQuery();
    const {data: searchedImages = []} = useSearchByNameQuery(search,{skip : search === ''});

    const displayedImages = useMemo(()=>{
        return search === '' ? images :searchedImages.data || [];
    },[images,searchedImages,search])

    return (
        <SafeAreaView style= {styles.container}>
            <View style = {styles.innerContainer}>
                <View style= {styles.searchContainer}>
                    <AntDesign name="search1" size={24} color="orange" />
                    <TextInput 
                    onChangeText={newText => setSearch(newText)}
                    style= {styles.search} 
                    placeholder= {'Search'}/>
                </View>
                <View style= {styles.textContainer}>
                { search.length > 0 ? null :<Text style= {styles.text}>Trending Giphys</Text> }
                </View>
                <ScrollView style= {styles.card}>
                    {displayedImages.map((image,i)=>{
                            return(
                                <Card 
                                    key={image.id}
                                    item={image}
                                    title={image.title}
                                    image={image.images.original.url}
                                    description={image?.user?.description}
                                    onPress={()=> navigation.navigate("Details", {
                                            title : image.title,
                                            url : image.images.original.url,
                                            description: image?.user?.description,
                                            type: image.type,
                                            slug: image.slug,
                                            item: image
                                        }
                                    )}

                                /> 
                            )
                    })}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: defaultStyles.colors.medium,
    },
    innerContainer: {
        marginTop: 15
    },
    search: {
        width: '80%',
        height: 50,
        backgroundColor: defaultStyles.colors.white,
        marginLeft: 5

    },
    searchContainer: {
        marginRight:20,
        marginLeft: 20,
        flexDirection: 'row',
        backgroundColor: defaultStyles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
    },
    card: {
        marginTop: 15
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        marginTop: 15,
        color: defaultStyles.colors.primary
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

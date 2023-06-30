import React from 'react';
import { View, StyleSheet, Button, Text, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenA() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Images')
    }
  
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/belinha1.png')}/>
        <Text style= {styles.text1}>
            aqui enaltecemos belinhas
        </Text>
        <Button
            title="Ver mais imagens"
            onPress={openScreen}
            color="grey"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebecee",
        justifyContent: "center",
        alignItems: 'center',
    },
    text1: {
        textAlign: "center",
        margintop: 10,
        marginBottom: 10,
    },
    image:{
        marginBottom: 10,
        width: 400,
        height: 400,
      },
})
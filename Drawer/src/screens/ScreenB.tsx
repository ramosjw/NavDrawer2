import React from 'react';
import { View, StyleSheet, Button, Image} from 'react-native';

import { useNavigation } from '@react-navigation/native';


export function ScreenB() {
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Donates', {name: "Esse conteúdo veio da tela B"})
    }
  
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require('../../assets/belinha9.png')}/>

        <Button style={styles.button}
            title="Deixar sua doação"
            onPress={openScreen}
            color="grey"
        />

        <View style={styles.imagens}>
      <Image style={styles.imagem} source={require('../../assets/belinha2.png')}/>
      <Image style={styles.imagem} source={require('../../assets/belinha3.png')}/>
      </View>

      <View style={styles.imagens}>
      <Image style={styles.imagem} source={require('../../assets/belinha3.png')}/>
      <Image style={styles.imagem} source={require('../../assets/belinha4.png')}/>
      </View>

      <View style={styles.imagens}>
      <Image style={styles.imagem} source={require('../../assets/belinha5.png')}/>
      <Image style={styles.imagem} source={require('../../assets/belinha6.png')}/>
      </View>

      <View style={styles.imagens}>
      <Image style={styles.imagem} source={require('../../assets/belinha7.png')}/>
      <Image style={styles.imagem} source={require('../../assets/belinha8.png')}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebecee",
        justifyContent: "center",
        alignItems:'center',
    },
    image:{
        width: 140,
        height: 140,
        marginBottom: 5,
      },
    imagens:{
        flexDirection:'row',
        justifyContent:'center',
        marginTop: 3,
      },

    imagem: {
      width:160,
      height: 120,
      margin:3,
      },
      button: {
        marginBottom: 3,
      },
})
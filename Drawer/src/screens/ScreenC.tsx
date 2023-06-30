import React from 'react';
import { View, StyleSheet, Button, Text, TextInput} from 'react-native';
import { useRoute } from '@react-navigation/native';

import { useNavigation } from '@react-navigation/native';

type ParamsProps = {
    name: string
}

export function ScreenC() {
    
    const route = useRoute();
    const { name } = route.params as ParamsProps;
    
    const navigation = useNavigation();
  
    function openScreen(){
        navigation.navigate('Home')
    }
  
    return (
    <View style={styles.container}>
        <Text style={styles.text}>
            Deixe aqui sua doação para belinha gordinha comprar seu biscoito de cada dia
        </Text>
        <TextInput
        style={styles.input}
        placeholder="Exemplo: R$ 100"
      />
        <Button style={styles.button}
            title="Voltar para Home"
            onPress={openScreen}
            color="grey"
        />
        <Button style={styles.button2}
            title="Voltar"
            onPress={() => navigation.goBack()}
            color="black"
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebecee",
        justifyContent: "center",
        alignItems: 'center'
    },
    text:{
        color: "#000",
    },
    input: {
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 15,
        width: 350,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 16,
        color: 'grey',
      },
      button: {
        marginBottom: 10,
        marginTop: 10,
        width: 400,
      },
      button2: {
        marginBottom: 10,
        marginTop: 10,
        width: 400,
      },
})
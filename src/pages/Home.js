import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function Home({ route, navigation}) {

    const { email, password } = route.params;
    

    return (
        <View style={styles.container}>
           
            <Text>Entrou:  {email}</Text>

            <TouchableOpacity
            onPress={() => {navigation.navigate('Login')}}>
                <Text>SAIR</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    }
})


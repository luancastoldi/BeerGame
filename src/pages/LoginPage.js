import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, Button, ActivityIndicator, Alert, Modal, TouchableOpacity } from 'react-native'
import firebase from 'firebase'

import FormRow from '../components/FormRow'

export default function LoginPage({ navigation, route }) {

    const [create, setCreate] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState('')
  
    function tryLogin() {
        setIsLoading(true)
        console.log(email + " " + password)
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                // Alert.alert("SUCESSO !!",
                //     "Usuário Autenticado"),
                navigation.navigate('Home', { email, password })
            })
            .catch(error => {
                console.log("Usuário Inválido")
                Alert.alert("Opss..",
                    "Usuário ou Senha Incorretos")
            })
            .then(() => setIsLoading(false))
    }

    useEffect(() => {
        async function openFire() {
            var firebaseConfig = {
                apiKey: "AIzaSyB8oKacEwjrkSZUqPNgtI-c-Q488ihUJlM",
                authDomain: "series-c20bb.firebaseapp.com",
                projectId: "series-c20bb",
                storageBucket: "series-c20bb.appspot.com",
                messagingSenderId: "57244797695",
                appId: "1:57244797695:web:dc58f6e63b8b4d78b59aca"
            };
            // Initialize Firebase
            console.log("abriu o firebase")
            firebase.initializeApp(firebaseConfig);
        }
        openFire();
    }, []);

    function renderBtn() {
        if (isLoading)
            return <ActivityIndicator
                size="small" color="#f4511e"
            />;
        return (
            <Button
                title="ENTRAR"
                color={'#f4511e'}
                onPress={() => { tryLogin() }}
            >
            </Button>
        );
    }

    function createUser() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                Alert.alert("Prontinho",
                    "Usuário Cadastrado"),
                setCreate(false)
            )
            .catch()
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titlePage}>Login</Text>
            <View>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="nome@email.com"
                        value={email}
                        onChangeText={value => setEmail(value)}
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="********"
                        secureTextEntry={true}
                        onChangeText={value => setPassword(value)}
                    />
                </FormRow>

                {renderBtn()}

                <TouchableOpacity
                    style={styles.btnCreate}
                    onPress={() => { setCreate(true) }}>
                    <Text>CRIAR CONTA</Text>
                </TouchableOpacity>

                <Modal
                    transparent={false}
                    animationType="slide"
                    visible={create}
                >
                    <TouchableOpacity
                        onPress={() => { setCreate(false) }}
                    >
                        <Text>❌</Text>
                    </TouchableOpacity>

                    <View style={styles.modalContainer}>


                        <Text style={styles.titlePage}>Crie sua Conta</Text>
                        <FormRow>
                            <TextInput
                                style={styles.input}
                                placeholder="nome@email.com"
                                value={email}
                                onChangeText={value => setEmail(value)}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                style={styles.input}
                                placeholder="********"
                                secureTextEntry={true}
                                onChangeText={value => setPassword(value)}
                            />
                        </FormRow>
                        <Button
                            title="CRIAR"
                            color={'#f4511e'}
                            onPress={() => { createUser() }}
                        >
                        </Button>



                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    input: {
        fontSize: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        margin: 20,
    },
    btnCreate: {
        marginTop: 30,
        alignSelf: 'center'
    },
    titlePage: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 20
    }

})

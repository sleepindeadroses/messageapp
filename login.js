import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Login(props) {
    const { navigation } = props;

    const goToRegister =() => {
        navigation.navigate("Registro");
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.firstSection}>
                    <Image
                source={require('./src/assets/fondo.jpg')}
                    style={{ width: "100%", height: "120%", resizeMode: "cover"}}
                />
                <View 
                
                    style={{ position: "absolute", }}
                >
                    <Text style={styles.title}>Strand</Text>
                </View>
            </View>

            <View style={styles.secondSection}>
                
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="green"                
                            placeholder="ejemplo@prueba.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="green"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}>
                        <Text style={styles.forgotPassword}>¿Olvidó su contraseña?</Text>
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Iniciar sesión</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                 
                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>¿No tiene una cuenta?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={styles.singup}>Registrarse</Text>
                    </TouchableOpacity>
                </View>
               
            </View>

        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',    
    },
    firstSection: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: "green",
        width: "100%",
    },
    secondSection: {
        flex: 2,
        backgroundColor: "white",
        width: "100%",
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between",
    },
    title:{
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 48,
        color: "white",
        fontWeight: "bold",
    },
    label: {
        color: "black",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    forgotPassword: {
        color: "#000",
        textAlign: "right",
    },
    button: {
        backgroundColor: "green",
        padding: 15,
        borderRadius: 30,
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 10,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    }, 
    singup: {
        color: "green",
        paddingLeft: 5,
    }

})
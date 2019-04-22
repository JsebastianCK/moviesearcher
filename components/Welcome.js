import React from 'react';


import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
    ImageBackground,
    Image
} from 'react-native';



export default class Welcome extends React.Component {

    //Opciones para el Header de navegacion
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{uri: fondo}} style={styles.imageBackground} blurRadius={1}>
                    <View style={styles.containerHijo}>
                        <Image source={{uri: imagen}} style={styles.logo}/>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Home')}
                            style={styles.boton}
                        >
                        <Text style={styles.textoBoton}>EMPEZAR</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
            );
    }
}

//Logo del inicio (The Movie DB)
const imagen = 'https://www.themoviedb.org/assets/2/v4/logos/312x276-primary-green-74212f6247252a023be0f02a5a45794925c3689117da9d20ffe47742a665c518.png';

//Imagen de fondo (Robadisima de Netflix)
const fondo = 'https://hcdevilsadvocate.com/wp-content/uploads/2019/01/netflix-background-9-900x506.jpg';
//Estilos de esta vista
const styles = StyleSheet.create({
    boton: {
        backgroundColor: '#bf221a',
        alignItems: 'center',
        width: '80%',
        height: 40,
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '25%',
        borderRadius: 10,
        padding: 10,
    },
    textoBoton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    logo: {
        width: '50%',
        height: '50%',
        marginLeft: '25%',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    containerHijo: {
        marginTop: '25%'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
      }
});

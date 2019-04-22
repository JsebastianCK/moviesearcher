import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableHighlight , SearchBar} from 'react-native';



export default class Busqueda extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            busqueda: ''
        };
    }

    buscar = () => {
        this.props.onSearch(this.state.input);
    }

    render() {
        return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                textAlign="center"
                onChangeText={input => this.setState({input})}
            />
            <TouchableHighlight onPress={this.buscar} style={styles.botonBusqueda}>
                <Text style={styles.textoBoton}>Buscar Pelicula</Text>
            </TouchableHighlight>
        </View>
        );
    }
}

//Estilos de esta vista
const styles = StyleSheet.create({
    input: {
        borderColor: '#CCCCCC',
        borderBottomWidth: 1,
        height: 25,
        fontSize: 15,
        marginTop: '5%',
        marginRight: '25%',
        marginLeft: '25%',
    },
    botonBusqueda: {
        backgroundColor: '#bf221a',
        alignItems: 'center',
        width: '40%',
        height: 30,
        marginLeft: '5%',
        marginRight: '55%',
        marginTop: '5%',
        borderRadius: 10,
        padding: 5,
    },
    textoBoton: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontStyle: 'italic'
    }
});
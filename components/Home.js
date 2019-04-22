import React from 'react';
import Pelicula from './Pelicula';
import Busqueda from './Busqueda';
import constants from '../config/constants';
import { StyleSheet, Alert, Text, View, TouchableHighlight, ScrollView } from 'react-native';


export default class Home extends React.Component {

    //Constructor
    constructor(props) {
        super(props);

        this.state = {
            peliculas: [],
            busqueda: ''
        };
    }

    buscarPeliculas() {
        const{APIKEY , SEARCH_MOVIE, URLBASE} = constants;
        console.log('Buscando la pelicula: '+this.state.busqueda);
        fetch(URLBASE+SEARCH_MOVIE+APIKEY+'&query='+this.state.busqueda+'&language=es-ES')
            .then( (response) => response.json())
            .then( (responseJson) => {
                this.setState({
                    peliculas: responseJson.results
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    //Mapeo de peliculas
    renderPeliculas() {
        console.log('Entre a renderPeliculas(): peliculas ->'+this.state.peliculas);
        return this.state.peliculas.map((pelicula) => {
            return (
                <Pelicula key={pelicula.id} pelicula={pelicula} />
            )
        });
    }

    //Opciones para el Header de navegacion
    static navigationOptions = {
        title: 'Inicio',
        headerStyle: {
            backgroundColor: '#131834',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
            fontWeight: 'bold',
            textAlign:"center", 
            flex:1 
        },
        headerLeft: null    //Quito la flecha para volver
    }

    buttonClickListener = (input) =>{
        this.setState({
            busqueda: input
        },() => this.buscarPeliculas());
    }

    render() {
        return (
            <View style={styles.container}>
                <Busqueda onSearch={this.buttonClickListener}/>
                {(this.state.peliculas && this.state.peliculas.length > 0) && 
                    <ScrollView style={{marginTop: 10, marginHorizontal: 10}}>
                        {this.renderPeliculas()}
                    </ScrollView>}
            </View>
        );
    }
}

//Estilos
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#43465e',
        width: '100%',
        height: '100%',
    },
});
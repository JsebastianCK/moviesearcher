import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Pelicula extends React.Component {
    //Constructor
    constructor(props){
        super(props);

        this.state = {
            pelicula: this.props.pelicula
        }
    }

    render() {
        const imagen = 'https://image.tmdb.org/t/p/w400'+ this.state.pelicula.poster_path;
        return (
        <View style={styles.containerPelicula}>
            <Image source={{uri: imagen}} style={styles.poster}/>
            <View style={styles.containerDetalles}>
                <Text style={styles.titulo}>{this.state.pelicula.title}</Text>
                <Text style={styles.descripcion} numberOfLines={6}>{this.state.pelicula.overview}</Text>
            </View>
        </View>
        )
    }

}
const styles = StyleSheet.create({
    containerPelicula: {
        flexDirection: 'row',
        marginVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 10,
    },
    containerDetalles: {
        flexDirection: 'column',
        alignItems: 'stretch'
    },
    poster: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    titulo: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginLeft: 1
    },
    descripcion: {
        fontSize: 10,

    }
})

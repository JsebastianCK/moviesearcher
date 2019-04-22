import constants from '../config/constants';

//Busca una pelicula por el titulo
export const getPeliculas = (param) => {
    console.log('Buscando la pelicula: ' + param);

    const{APIKEY , SEARCH_MOVIE, URLBASE} = constants;
    return fetch(URLBASE+SEARCH_MOVIE+APIKEY+'&query='+param)
            .then( (response) => response.json())
            .then( (responseJson) => {
                return responseJson.results;
            })
            .catch((error) => {
                console.log(error);
            });
}
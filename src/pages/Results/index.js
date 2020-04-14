import React,{ useEffect ,useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string';


import {searchMovie} from '../../redux/actions/search';
import {movieResults, isSearchLoading} from '../../redux/selectors';
import MovieResult from '../../components/MovieResults';

export default ({location})=>{
    //dispara accion de la store
    const dispatch = useDispatch();
    //extrae informacion del store
    const movies = useSelector(state=>movieResults(state));
    const isLoading =  useSelector(state=> isSearchLoading(state));
    const [isLocked, setIsLocked] = useState(false);
    //(componentDidMount,componentDidUpdate y componentWillUnMout) permite llevar acciones
    // secundarias  en componentes funcionales 
    // Este hook, le indicamos a React que el componente tiene que hacer algo despues de renderizarse
    useEffect(() => {
        const {movieName} = queryString.parse(location.search);

        if (movieName && !isLocked){
            setIsLocked(true);
            dispatch(searchMovie({movieName}))
        }

        
    });


    const renderMovies = ()=>{
        if(movies){
            return movies.map((value,index)=> <MovieResult key={index} {...value}></MovieResult>);
        }else if(isLoading){
            return <CircularProgress size={100} color="primary"></CircularProgress>
        }
        return <div></div>
    }

    return (
        <Container>
            {renderMovies()}
        </Container>
    )
}
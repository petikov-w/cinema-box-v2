import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';

import { Container } from '../components/styles/Container.styled';
import { Single } from '../components/Single';


const SinglePage = () => {
   
    const { id } = useParams();
    const [film, setFilm] = useState([]);
    
    

    useEffect(()=>{
        // document.title = "Cinema Box - " + location.state.name;         
    }, []);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_LIST}` + id, {
            headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}})
            .then((responce) => responce.json())
            .then(data => setFilm(data));             
    }, [id]);
    

   return (
        
        <Container>
            <Single film={film}/>     
        </Container>        
    );
};

export {SinglePage};
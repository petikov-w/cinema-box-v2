import { Cards } from '../components/Cards';
import { Container } from '../components/styles/Container.styled';
// import { useState, useEffect, defer } from 'react';
// import { api_query } from '../components/Api';
import { useLoaderData } from 'react-router-dom';
// import styled from 'styled-components';



export const CatalogPage = () => {
    const films = useLoaderData()    

    //  console.log('===0000=films==>>>>  ', films); 
    // const [ films, setFilms ] = useState([])
    // const [ pagesCount, setPagesCount ] = useState(0)
    // eslint-disable-next-line no-unused-vars
    //const [ currentPage, setCurrentPage ] = useState(1)

    // useEffect(()=>{
    //     document.title = "Cinema Box - Каталог";
    //     api_query(currentPage).then((data) => {
    //         setFilms(data.films)});     
    //         // setFilms(data.films), setPagesCount(data.pagesCount)});     
    
    // }, [])

    // console.log("Список фильмов: ", films.films.length)    

    return (        
        <Container>
            <h1>Каталог</h1>   
            {films.films.length ? (<Cards films={films.films} />) : (<h3>Загрузка...</h3>)}            
        </Container>           
    )
}


export const catalogLoader = async ({request, params}) => {           
        // console.log('===request====> ', {request});
        // console.log('===params====> ', {params});
    const res = await fetch(`${process.env.REACT_APP_API_TOP}`+localStorage.getItem('currentPagePagination'), {
        headers: { "Content-Type": "application/json", "X-API-KEY": `${process.env.REACT_APP_API_KEY}`}})    
    return res.json()
}


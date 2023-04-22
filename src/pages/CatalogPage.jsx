import { useState, useEffect } from 'react';
//import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

import styles from '../components/styles/Pagination.module.css';
import { Cards } from '../components/Cards';
import { Container } from '../components/styles/Container.styled';
import {api_query} from '../components/Api';

export const CatalogPage = () => {
     const [films, setFilms] = useState([]);
     const [currentPage, setCurrentPage] = useState(1); // текущая страница
     const [pagesCount, setPagesCount ] = useState(0);

     const handleChange = (event, p) => { setCurrentPage(p); };

     const stylePagination = [styles.pagination, styles.container, styles.MuiPaginationItemText].join(' ');  
        
    

    console.log('===0000=films==>>>>  ', films); 
    console.log('===0001=films==>>>>  ', pagesCount); 
    

    // eslint-disable-next-line no-unused-expressions
    useEffect(()=>{api_query(currentPage).then((data) => {setFilms(data.films), setPagesCount(data.pagesCount)});}, []);
    // eslint-disable-next-line no-unused-expressions
    useEffect(()=>{api_query(currentPage).then((data) => {setFilms(data.films), setPagesCount(data.pagesCount)});}, [currentPage]);

             
     
    return (  
        <>
         <Helmet>
            <title>Cinema Box - Каталог</title>
         </Helmet>
        <Container>
            <h1>Каталог</h1>   
            <Stack spacing={2}>
              
                <Pagination count={pagesCount}
                            color="primary"
                            className={stylePagination}
                            page={currentPage}
                            onChange={handleChange}
                />
               
            </Stack>


            {films.length ? (<Cards films={films} />) 
                                    : (<h3>Загрузка...</h3>)}      
        </Container>           
        </>      
       
    );
};



export const catalogLoader = async ({request, params}) => {                  
    const res = await fetch(`${process.env.REACT_APP_API_TOP}`+localStorage.getItem('currentPagePagination'), {
        headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}});    
    return res.json();
};




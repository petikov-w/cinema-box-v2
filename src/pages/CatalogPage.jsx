import { useState, useEffect } from 'react';
import { Link as NavLink, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Stack from '@mui/material/Stack';
import {Pagination, PaginationItem} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { theme } from '../components/styles/Pagination.styled';
import { Cards } from '../components/Cards';
import {api_query} from '../components/Api';

export const CatalogPage = (props) => {
      
     const [searchParams, setSearchParams] = useSearchParams();
     const [films, setFilms] = useState([]);
     const [page, setPage] = useState( parseInt(searchParams.get('page') || 1)); // текущая страница
     const [pagesCount, setPagesCount ] = useState(0);
    
     const handleChange = (event, p) => { setPage(p); };

    //  const stylePagination = [styles.pagination, styles.container, styles.MuiPaginationUl].join(' ');  

    // eslint-disable-next-line no-unused-expressions
    useEffect(()=>{api_query(page).then((data) => {setFilms(data.films)
                                                   setPagesCount(data.pagesCount)                                                   
                                                });}, []);

    // eslint-disable-next-line no-unused-expressions
    useEffect(()=>{api_query(page).then((data) => {setFilms(data.films)
                                                   setPagesCount(data.pagesCount)
                                                   });}, [page]);

                
     
    return (  
        <>
         <Helmet>
            <title>Cinema Box - Каталог</title>
         </Helmet>
        {/* <Container> */}
            <h1>Каталог</h1>   
            <Stack spacing={2}>
              <ThemeProvider theme={theme}>
                <Pagination count={pagesCount} 
                            color="primary"                               
                            page={page}  
                            onChange={handleChange}
                            sx={{marginY: 3,
                                 marginX: 'auto',
                                 color: 'text.primary',
                            }}
                            renderItem={
                                (item) =>(  
                                  <PaginationItem                                     
                                     component={NavLink}
                                     to={`/films?page=${item.page}`}
                                     {...item}
                                     />   
                                )
                            }
                />               
              </ThemeProvider>
                
            </Stack>

            {films.length ? (<Cards films={films} />) 
                                    : (<h3>Загрузка...</h3>)}      
        {/* </Container>            */}
        </>      
       
    );
};



// export const catalogLoader = async ({request, params}) => {                  
//     const res = await fetch(`${process.env.REACT_APP_API_TOP}`+localStorage.getItem('currentPagePagination'), {
//         headers: { 'Content-Type': 'application/json', 'X-API-KEY': `${process.env.REACT_APP_API_KEY}`}});    
//     return res.json();
// };




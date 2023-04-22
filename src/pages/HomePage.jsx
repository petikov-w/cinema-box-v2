import { Helmet } from 'react-helmet';

import { Container } from '../components/styles/Container.styled';


const HomePage = () => {
    localStorage.setItem('currentPagePagination', 1);
    
    return (
        <>
            <Helmet>
                <title>Cinema Box - Главная</title>
            </Helmet>
            <Container>
                <h1>Главная</h1>
                <p>Это главная страница сайта</p>           
            </Container>     
        </>
           
    );
};

export {HomePage};
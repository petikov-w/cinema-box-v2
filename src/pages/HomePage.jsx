import { Container } from '../components/styles/Container.styled';
import { useEffect } from 'react';


const HomePage = () => {

    useEffect(()=>{
        document.title = "Cinema Box - Главная страница"     
        localStorage.setItem('currentPagePagination', 1)
    }, [])


    return (
        <Container>
            <h1>Главная</h1>
            <p>Это главная страница сайта</p>           
        </Container>        
    )
}

export {HomePage}
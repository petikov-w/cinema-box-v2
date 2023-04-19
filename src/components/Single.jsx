import React from 'react';
import {useNavigate} from 'react-router-dom'
import {PosterFilm, BackButton, InfoBoxLeft, InfoBoxRight,SingleFilmSection} from './styles/Single.styled'

export const Single = (props) => {
    const {film} = props
    const navigate = useNavigate();
    const goBack = () => navigate(-1);  

    return (
        <>
            <h1>{film.nameRu}</h1>
            <SingleFilmSection>
                <InfoBoxLeft>
                    <PosterFilm src={film.posterUrl}></PosterFilm>                                   
                    <BackButton onClick={goBack}>Назад</BackButton> 
                </InfoBoxLeft>  
                <InfoBoxRight>
                    <h5>Краткое содержание: </h5>
                    <p>{film.description}</p>
                    <h5>Год производства : <span style={{color:"blue"}}>{film.year}</span></h5>
                </InfoBoxRight>
            </SingleFilmSection>
        </>
    );
};








            
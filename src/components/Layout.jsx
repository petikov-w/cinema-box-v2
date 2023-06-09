import { Outlet } from 'react-router-dom';
import React from 'react';
import {Container} from '@mui/material';

import styled from 'styled-components';

import { Footer } from './Footer';
import { Header } from './Header';


const Main = styled.div` 
     min-height: calc(95vh - 85px - 22px);
     padding-top: 1.5rem 0;    
`;

const Layout = () => {
    return (
        <>
         
            <Header />     
               <Container maxWidth="lg">
                    <Main>
                        <Outlet />   
                    </Main>      
               </Container>   
            <Footer /> 
                      
        </>
    );
};

export { Layout };
 
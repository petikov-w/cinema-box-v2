import React from 'react';
import {Container} from '@mui/material';

import { LogoLink } from './styles/Link.styled';
import { FooterEl, Wrapper, Copyright } from './styles/Footer.styled';


export const Footer = () => {
    return (
        <FooterEl>
            <Container maxWidth="lg">
                <Wrapper>
                    <LogoLink to="/">КИНО</LogoLink>
                    <Copyright>© {new Date().getFullYear()} Petikov Vladimir</Copyright>                    
                </Wrapper>
            </Container>               
        </FooterEl>
    );
};

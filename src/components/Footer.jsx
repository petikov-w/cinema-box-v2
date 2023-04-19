import React from 'react';
import { Container } from './styles/Container.styled';
import { LogoLink } from './styles/Link.styled'
import { FooterEl, Wrapper, Copyright } from './styles/Footer.styled'


export const Footer = () => {
    return (
        <FooterEl>
            <Container>          
                <Wrapper>
                    <LogoLink to='/'>КИНО</LogoLink>
                    <Copyright>© {new Date().getFullYear()} Petikov Vladimir</Copyright>                    
                </Wrapper>
            </Container>            
        </FooterEl>
    );
};

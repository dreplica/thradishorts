import styled from 'styled-components';
import { colors } from '../../util/colors';

export const Container = styled.div`
    display: flex;
    flex-direction:column;
    background:linear-gradient(to right, hsla(257, 27%, 26%,0.9),hsla(257, 27%, 26%,0.9)), url(${'./assets/bg-boost-desktop.svg'});
    /* background:;  */
    justify-content:center;
    align-items:center;
    height:200px;

    `;

export const Title = styled.p`
    font-size:2rem;
    color:white;
    font-weight:bold;
    margin-bottom:10px;
    width:80%;
    text-align:center;
    
    @media (max-width:960px) {
        font-size:1.5rem;
        
    }
    `
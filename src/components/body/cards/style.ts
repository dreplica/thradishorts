import { colors } from './../../../util/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width:32%;
    z-index:2;
    height:300px;
    background:white;
    padding:10px;
    
    @media (max-width:960px) {
        width:100%;
        margin:50px !important;
        text-align:center;
    }

`;

export const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`

export const Image = styled.div`
    /* margin-left:30px; */

    width:90px;
    height:90px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50px;
    background:${colors.Dark_Violet};
    position:relative;
    top:-50px;
    left:50px;
    
    img{
    }
    @media (max-width:960px) {
        margin:auto;
        left:auto;
    }
`

export const Description = styled.p`

`
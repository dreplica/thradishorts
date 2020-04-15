import { colors } from './../../../util/colors';
import styled from 'styled-components';

export const Container = styled.div`
    width:350px;
    z-index:2;
    height:250px;
    background:white;
    padding:10px;

`;

export const Title = styled.p`

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
    top:-35px;
    left:50px;
    
    img{
    }
`

export const Description = styled.p`

`
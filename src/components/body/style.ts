import styled from 'styled-components';
import { colors } from '../../util/colors';

export const Container = styled.section`
    width:100%;
    position:relative;
    padding:100px 10px 70px 10px;
    height:auto;
    background:whitesmoke;
    `;

export const Cardbox = styled.div`
    width:80%;
    position:relative;
    margin:auto;
    display:flex;
    flex-direction:column;
    z-index:1;
    justify-content:space-between;
    align-items:center;

    @media (max-width:960px) {
        justify-content:flex-start;
    }
`

export const CardContent = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;

    @media (max-width:960px) {
        flex-direction:column;
        align-items:center;
        position:relative;
        top:0px;
    }


`

export const Line = styled.div`
    width:100%;
    position:relative;
    bottom:-200px;
    z-index:1.5;
    height:10px;
    background-color:${colors.Cyan};

    @media (max-width:960px) {
        position:absolute;
        left:auto;
        right:auto;
        top:10px;
        width:10px;
        height:800px;
    }
`
export const Links = styled.div`
    width:80%;
    position:absolute;
    height:auto;
    left:10%;
`
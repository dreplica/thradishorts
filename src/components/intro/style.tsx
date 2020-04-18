import styled from 'styled-components';
import { colors } from '../../util/colors';

export const Container = styled.div`
  width:80%;
  height:auto;
  margin:auto;
`;

export const Content = styled.div`
    display:flex;
    margin-bottom:100px;
    width:100%;
    flex-wrap:wrap;
    justify-content:center;
    align-items:center;

    @media (max-width:960px) {
        flex-direction:column;
    }
`

export const Text=styled.div`
    align-self: flex-start;
    flex:1;
     @media (max-width:960px) {
        order:2;
        text-align:center;
    }
`

export const  Title=styled.p`
    font-size:3rem;
    font-weight:bolder;
    margin:0px;
`

export const  SubText=styled.p`
    font-weight:600;
    margin-bottom:50px;
    color:${colors.Gray};
`

export const  Image=styled.div`
    flex:1.5;
    position:relative;
    right:-150px;
    img{
        width:100%;
    }
     @media (max-width:960px) {
        flex:2;
        order:1;
        right:-100px;
    }
`
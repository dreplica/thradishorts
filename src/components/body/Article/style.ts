import styled from 'styled-components';
import { colors } from '../../../util/colors';

export const Container = styled.div`
  width:40%;
  text-align:center;
  margin:200px auto;
  /* margin-bottom:100px; */

   @media (max-width:960px) {
        width:80%;
    }
`;


export const Header = styled.p`
    font-size:2.5rem;
    margin-bottom:10px;
    font-weight:bold;

    @media (max-width:960px) {
        font-size:1.5rem;
    }
`

export const Text = styled.p`
    font-weight:500;
    color:${colors.Gray};
`
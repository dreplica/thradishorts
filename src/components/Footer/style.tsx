import styled from 'styled-components';
import { colors } from '../../util/colors';

export const Container = styled.section`
  display:flex;
  justify-content:space-between;
  align-items:flex-start;
  background:${colors.Very_Dark_Violet}
`;

export const Logo = styled.div`
    flex:1;
    background:yellow;
    img{
        margin:auto;
    }
`

export const Listing = styled.div`
    display:flex;
    height:auto;
    align-items:center;
    justify-content:center;
    flex:3
`
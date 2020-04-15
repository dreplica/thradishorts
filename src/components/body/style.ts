import styled from 'styled-components';
import { colors } from '../../util/colors';

export const Container = styled.section`
    width:100%;
    padding:10px;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:whitesmoke;
`;

export const Cardbox = styled.div`
    width:80%;
    display:flex;
    flex-direction:column;
    z-index:1;
    justify-content:space-between;
    align-items:center;
`

export const CardContent = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;


`

export const Line = styled.div`
    width:100%;
    position:relative;
    bottom:-200px;
    z-index:1.5;
    height:10px;
    background-color:${colors.Cyan}
`

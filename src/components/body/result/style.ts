import styled from 'styled-components';
import { colors } from '../../../util/colors';

export const Container = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:space-around;
  align-items:center;
  width:100%;
  margin-bottom:10px;
  height:50px;
  border-bottom:1px solid ${colors.Very_Dark_Violet};
`;

export const Short = styled.input`
    width:60%;
    border:0px;
    outline-width:0px;
    background:whitesmoke;
    font-weight:bold;
    height:30px;
    padding-left:30px;

    :focus{
      border:0px;
    }
`;

export const Copy = styled.button`
  width:20%;
  border:0px;
  outline-width:0px;
  border-radius:20px;
  color:white;
  background:${colors.Cyan};
  padding:10px;

  :hover{
    color:black;
  }
`
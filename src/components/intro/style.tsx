import styled from 'styled-components';

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
`

export const Text=styled.div`
    align-self: flex-start;
    flex:1;
`

export const  Title=styled.p`
    font-size:3rem;
    font-weight:bolder;
    margin:0px;
`

export const  SubText=styled.p`
    font-weight:300;
    margin-bottom:50px;
`

export const  Image=styled.div`
    flex:1.5;
    position:relative;
    right:-150px;
    img{
        width:100%;
    }
`
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:32%;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
`;

export const Content = styled.ul`
    text-align:left;

    li{
        list-style:none;
        color:black;
        font-weight:300;

        a{
            text-decoration:none;
            color:white;
        }
    }
`

export const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`

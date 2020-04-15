import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    width:35%;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:red;
`;

export const Content = styled.ul`
    text-align:left;

    li{
        list-style:none;
        color:black;
        font-weight:300;

        a{
            text-decoration:none;
        }
    }
`

export const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`

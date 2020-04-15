import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Content = styled.ul`
    text-align:left;

    li{
        list-style:none;
        font-weight:200;
    }
`

export const Title = styled.p`
    font-size:1.5rem;
    font-weight:bold;
`

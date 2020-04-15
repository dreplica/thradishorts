import styled from 'styled-components';
import * as Style from '../../util/colors'

export const Container = styled.section`
    width:80%;
    position:sticky;
    top:0px;
    padding:30px;
    z-index:100;
    margin:30px auto 60px auto;
    height:auto;
    background:white;
    display:flex;
    justify-content:space-around;
    align-items:center;

    li{
        list-style:none;
        display:inline;
    }
    a{
        color:inherit;
        text-decoration:none;
    }
  
`;

export const Head = styled.header`
    display:flex;
    flex:1.5;
    justify-content:flex-start;
    align-items:center;
`
    
export const Logo = styled.div`
`

export const  Nav = styled.ul`

    li{
        margin:0px 20px 0px 20px;
        font-weight:300;
    }

`

export const Auth = styled.ul`
    display:flex;
    flex:0.5;
    flex-wrap:wrap;
    justify-content:space-around;
    align-items:center;
    font-weight:bold;

    .sign{
        border-radius:20px;
        background:${Style.colors.Cyan};
        color:white;
        padding:3px 20px;

        :hover{
            color:${Style.colors.Grayish_Violet}
        }
    }
    .log{
        :hover{
            color:${Style.colors.Grayish_Violet}
        }
    }
`
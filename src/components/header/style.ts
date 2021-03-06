import styled from 'styled-components';
import * as Style from '../../util/colors'

export const Container = styled.section`
    position:sticky;
    position: -webkit-sticky;
    top:0;
    width:100%;
    padding:30px;
    z-index:100;
    margin:20px auto 60px auto;
    height:auto;
    background:white;

    li{
        list-style:none;
        display:inline;
    }
    a{
        color:inherit;
        text-decoration:none;
    }

    .Menu{
        display:none;
        transition:transform 0.5s;
        :hover{
            transform:scale(1.2)
        }
    }
  @media (max-width:990px) {
      .Menu{
          display: block;
      }
  }
`;

export const Head = styled.header`
    position:relative;
    display:flex;
    width:80%;
    margin:auto;
    justify-content:space-around;
    align-items:center;
`

export const Logo = styled.div`
    flex:1;
    font-size:2em;
    font-weight:bolder;
    color:${Style.colors.Dark_Violet};
`


export const List = styled.ul`
    display:flex;
    width:60%;
        li{
            margin:0px 20px 0px 20px;
            font-weight:300;
        }
`

export const Nav = styled.nav`
    flex:4;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:flex-start;

    @media (max-width:989px) {
        display:none !important;
        top:80px;
        width:100%;
        height:50vh;
        position:absolute;
        border-radius:10px;
        flex-direction:column;
        justify-content:flex-start;
        align-items:center;
        background:${Style.colors.Dark_Violet};

        ul{
            flex-direction:column;
            justify-content:center;
            margin-top:21px;

            li{
                text-align:center;
                margin:10px auto;
                font-weight:bold;
                transition:transform 0.5s;

                a{
                    color:white;
                }
                :hover{
                    transform:scale(1.3)
                }
            }
        }
    }

`

export const Auth = styled.ul`
    width:30%;
    display:flex;
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

    @media (max-width:990px) {
       width:80%;
       justify-content:flex-end;
       margin:auto;
       border-top:1px solid grey;
    }
`
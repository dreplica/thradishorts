import styled from "styled-components";

export const Container = styled.section`
    position:relative;
    bottom:-40px;
    width:100%;
    display:flex;
    border-radius:10px;
    align-items:center;
    margin:auto;
    background:linear-gradient(to right, hsla(257, 27%, 26%,0.9),hsla(257, 27%, 26%,0.9)), url(${'./assets/bg-shorten-desktop.svg'});;

    form{
        width:100%;
        height:100px;
        display:flex;
        justify-content:space-around;
        align-items:center;
        align-self:center;

        label{
            width:70%;

            input{
                width:100%;
                height:40px;
                padding:20px;
                border:0;
                border-radius:5px;
            }
        }

         @media (max-width:960px) {
            flex-direction:column;
            justify-content:space-around;
            min-height:120px;
            padding:10px 0px;

            label{
                width:80%;
            }
            a{
                width:80%;
            }
        }

    }

    
`
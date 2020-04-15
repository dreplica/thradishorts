import { colors } from './../../util/colors';
import styled from "styled-components";

export const Container = styled.section`
    position:relative;
    bottom:-40px;
    width:80%;
    display:flex;
    border-radius:10px;
    align-items:center;
    margin:auto;
    height:100px;
    background:linear-gradient(to right, hsla(257, 27%, 26%,0.9),hsla(257, 27%, 26%,0.9)), url(${'./assets/bg-shorten-desktop.svg'});;

    form{
        width:100%;
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
                border-radius:10px;
            }
        }

    }
`
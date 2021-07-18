import React from 'react'
import styled from "styled-components";

function Contact() {
    return(
<$side>
    <h1>top3 realtors</h1>
    <$box>

        <$cont1><img src="imgs/hande-ercel.jpg"/>hande archal</$cont1>
        <$cont2><img src="imgs/hande-ercel.jpg"/>hande archal</$cont2>
        <$cont3><img src="imgs/hande-ercel.jpg"/>hande archal</$cont3>
    </$box>
</$side>
    )

}

export default Contact;

const $side=styled.div`
  background-color: var(--c-blue);
  grid-column: 9/12;
  grid-row:1/2;
  z-index: 33;
  color: white;
  padding-top:30px;
  text-align:center;
    `
const $box=styled.div`
  justify-content: center;
  align-content: center;
  margin: auto;
  width: 20rem;
  height: 40rem;
  padding:8%  1%;
  display:grid;
  grid-template-rows:30% 30% 30%;
  grid-gap:0px;
    img{
      width:50%;
      height:70%;
      border-radius:50%;
    }
    `

const $cont=styled.div`
padding:1px;
    `
const $cont1=styled($cont)`
  grid-row:1/2;
 
`
const $cont2=styled($cont)`
  grid-row:2/3;
 
`
const $cont3=styled($cont)`
  grid-row:3/4;

`

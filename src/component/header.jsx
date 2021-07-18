import React from 'react'
import styled from "styled-components";

function Header() {
  return (

            <$nav>
              <$title>nexter</$title>
                <br/><br/><br/><br/><br/><br/><br/><br/>
                <$title2>yourownhome</$title2>
                <$title3>the altimate person</$title3>
                <br/>
                <$butten>view corke oldiodd</$butten>
                <br/><br/><br/>
                <$b/><span className="l">hellow</span><$b/>
            </$nav>



  );
}
export default Header;


const $nav=styled.nav`
  color: white;
  padding-left: 10rem;
  grid-column:sidebar-b/full-end ;
  background-color:var(--c-blue-o);
  grid-row: 1/2;
  justify-content: center;
  align-content: center;
`
const $title=styled.span`
margin-left:20rem;
justify-content: center;
  color: var(--c-brown);
  font-size:4rem;
`
const $title2=styled.div`
  
  font-size:1.8rem;
  color: var(--c-brown);
`
const $title3=styled($title2)`
font-size:4rem;
  color: white;
  
`

const $butten=styled.button`
  background-color: var(--c-brown);
  padding:1rem 2rem;
  border: none;
   
`

const $b=styled.button`
   border: none;
  background-color: white;
  height:1px;
  width:30rem;
  margin-top:3rem;
  
  `

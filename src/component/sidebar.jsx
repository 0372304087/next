import React from 'react'
import styled from "styled-components";

function Sidebar() {
  return (
<div>
  <$sidbar>
      <$b></$b>

  </$sidbar>
  </div>
  );
}


export default Sidebar;

const $sidbar=styled.div`
grid-column:sidebar-s/sidebar-b;
  grid-row: 1/-1;
  background-color:var(--c-brown);
  display: flex;
  justify-content: center;
  height: 80rem;
  
`
const $b=styled.button`
   border: none;
  background-color: white;
  height: 2px;
  width: 4.5rem;
  margin-top:3rem;
  
  ::after,
  ::before{
    background-color: white;
    height: 2px;
    width: 4.5rem;
    content: '';
    display: block;
    
  }
  ::after{
    transform:translateY(1.2rem);
    
  }
  ::before{
    transform:translateY(-1.2rem);
  }
  
  `
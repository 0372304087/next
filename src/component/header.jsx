import React from 'react'
import styled from "styled-components";

function Header() {
  return (

            <$nav>
              next
            </$nav>


  );
}
export default Header;



const $nav=styled.nav`
  grid-column:sidebar-b/full-end ;
  background-color:var(--c-blue-o);
  grid-row: 1/2;
  justify-content: center;
  align-content: center;
`
const $sidebar=styled.div`


`
const $section2=styled.div`


`

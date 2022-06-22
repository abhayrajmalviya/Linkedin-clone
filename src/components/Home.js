import React from 'react'
import styled from 'styled-components';
import Feed from './Feed';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function Home() {
  return (
    <HomeContainer>
        <Sidebar />  
        <Feed/>
        <Widgets/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
    display:flex;
    width: 80%;
    margin-top: 35px;
    max-width: 1200px;
    min-width: none;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
`;
export default Home
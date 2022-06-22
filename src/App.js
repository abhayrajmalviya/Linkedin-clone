import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import styled from 'styled-components';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './components/Firebase';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();


  useEffect(()=>{
    auth.onAuthStateChanged((userAuth) =>{
      if (userAuth){
        //user is logged in
        dispatch(
          login({
            email:userAuth.email,
            uid : userAuth.uid,
            displayName: userAuth.displayName,
            photoURL : userAuth.photoURL,
          })
        );
      } else{
        // user is not logged out
        dispatch(logout());
      }
    })
  },[]);
  
  return (
    <AppContainer>
      { !user ?(
        <Login/>
      ):(
          <AppBody className="app__body">
            <Header/>
            <Home/>
          </AppBody>
      )}
    </AppContainer>
  );
}
const AppBody = styled.div`
    width:100%;

`;
const AppContainer = styled.div`
  display :flex;
  background-color:  #f3f2ef;
  flex-direction: column;
  align-items: center;
`;
export default App;

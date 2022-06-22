import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch} from 'react-redux';
import { logout} from '../features/userSlice';
import { auth } from './Firebase';

function Header() {
    const dispatch = useDispatch();

    const logoutApp =() => {
        console.log('logged out');
        dispatch(logout());
        auth.signOut();
    };

  return (
    <HeaderContainer>
        <HeaderLeft>
            <img src="https://www.freeiconspng.com/uploads/linkedin-logo-3.png" alt=''/>
            <Search>
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
            </Search>
        </HeaderLeft>
        <HeaderRight>
            <HeaderOption Icon ={HomeIcon} title="home"/>
            <HeaderOption Icon ={SupervisorAccountIcon} title="My Network"/>
            <HeaderOption Icon ={BusinessCenterIcon} title="Jobs"/>
            <HeaderOption Icon ={ChatIcon} title="Messaging"/>
            <HeaderOption Icon ={NotificationsIcon} title="Notifications"/>
            <HeaderOption 
                avatar= {true}
                title='me'
                onClick={logoutApp}
            />
        </HeaderRight>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
    position: sticky;
    top:0;
    display:flex;
    background-color: #fff;
    justify-content: space-evenly;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 0.1px solid lightgray;
    width:100%;
    z-index: 999;
`
const HeaderLeft = styled.div`
    display : flex;
    img{
        object-fit: contain;
        height: 40px;
        margin-right: 10px;
    }
`

const HeaderRight = styled.div`
    display : flex;
`
const Search = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    height: 22px;
    color: gray;    
    background-color:#eef3f8;
    width: 300px;
    input{
        outline: none;
        border: none;
        background: none;
    }
`

export default Header
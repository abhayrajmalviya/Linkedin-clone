import { Avatar } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from '../features/userSlice';

function Sidebar() {
    const user = useSelector(selectUser);
    const recentitem = (topic) =>(
        <SidebarRecentItem>
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </SidebarRecentItem>
    );
  return (
    <SidebarContainer>
        <SidebarTop>
            <img src="https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
            <Avatar  className="avt" src={user?.photoURL} >
                {user.displayName[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </SidebarTop>
        <SidebarStats>
            <SidebarStat>
                <p>who viewed you</p>
                <p className='SidebarStatNumber'>2543</p>
            </SidebarStat>
            <SidebarStat>
                <p>views on post</p>
                <p className='SidebarStatNumber'>2448</p>
            </SidebarStat>
        </SidebarStats>
        <SidebarBottom>
            <p>Recent</p>
            {recentitem('reactjs')}
            {recentitem('SoftwareEngineering')}
            {recentitem('Ethical hacking')}
            {recentitem('Design')}
            {recentitem('FrontendDeveloper')}
        </SidebarBottom>
    </SidebarContainer>
  )
}

// Styles

const SidebarContainer = styled.div`
    top:80px;
    position: sticky;
    flex: 0.2;
    border-radius:10px;
    text-align: center;
    height: fit-content;
`;

const SidebarTop = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgray;
    border-bottom: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: white; 
    padding-bottom: 10px;
    
    .avt {
        object-fit: cover !important; 
        margin-bottom: 10px;
        z-index: 999;
        border :1px solid black;
    }
    img{
        margin-bottom: -20px;
        width: 100%;
        height: 60px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        object-fit: cover;
    }
    h4{
        color: gray;
        font-size: 12px;
    }
    h2{
        font-size: 18px;
    }
`;
const SidebarStats = styled.div`
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;
const SidebarStat = styled.div`
    margin-top: 10px;   
    display: flex;
    justify-content: space-between;

    p{
        color: gray;
        font-size: 12px;
        font-weight:600;
    }
    .SidebarStatNumber{
        font-weight: bold; 
        color: #0a66c2;
    }
`;

const SidebarBottom = styled.div`
    text-align : left;
    padding: 10px;
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 10px
    margin-top :10px;

    p{
        font-size: 13px;
        padding-bottom: 10px;
    }
`;
const SidebarRecentItem = styled.div`
    display:flex;
    font-size: 13px;
    color: gray;
    font-weight: bolder;
    cursor: pointer;
    padding: 5px;
    
    :hover{
        background-color: whitesmoke;
        color: black;
        cursor: pointer;
        border-radius: 10px;
    }
`;


export default Sidebar
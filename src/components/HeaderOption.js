import styled from 'styled-components';
import { Avatar} from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar , Icon ,title, onClick}) {
    const user = useSelector(selectUser);

  return (
    <HeaderOptionContainer onClick={onClick}>
        {Icon && <Icon className='avt'/>}
        {avatar &&  <Avatar className="avt" src={user?.photoURL}>{user?.displayName[0] }</Avatar>}
        <h3>{title}</h3>
    </HeaderOptionContainer>
  )
}
const HeaderOptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-right:20px;
    color:gray;
    cursor: pointer;
    
    :hover{
        color: black;
    }

    h3{
        font-size:12px;
        font-weight: 400;
    }
    .avt {
        object-fit: contain;
        height: 25px !important;
        width: 25px !important;    
    }
`;

export default HeaderOption
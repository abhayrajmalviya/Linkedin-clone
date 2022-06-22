import styled from 'styled-components';
import { Avatar, Icon } from '@mui/material';
import React from 'react';

function HeaderOption({avatar , Icon ,title}) {
  return (
    <HeaderOptionContainer>
        {Icon && <Icon className='avt'/>}
        {avatar &&  <Avatar className="avt" src={avatar} />
        }
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
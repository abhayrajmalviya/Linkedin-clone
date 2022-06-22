import { Avatar } from '@mui/material';
import React from 'react'
import styled from 'styled-components'
import InputOptions from './InputOptions';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post({ name, description, message, photoUrl}) {

  return (
    <PostContainer>
        <PostHeader>
            <Avatar/>
            <PostInfo>
                <h2>{name}</h2>
                <p>{description}</p>
            </PostInfo>
        </PostHeader>    
        <PostBody>
            <p>{message}</p>
        </PostBody>
        <PostButton>
            <InputOptions Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray'/>
            <InputOptions Icon={ChatOutlinedIcon} title='Comment' color='gray'/>
            <InputOptions Icon={ShareOutlinedIcon} title='Share' color='gray'/>
            <InputOptions Icon={SendOutlinedIcon} title='Send' color='gray'/>
        </PostButton>
    </PostContainer>

  )
}

const PostContainer = styled.div`
    background-color: #fff;
    padding: 15px;
    margin-bottom:10px;
    border-radius: 10px;
`;
const PostHeader = styled.div`
    display: flex;
    margin-bottom: 10px;
    align-items: center;

`;
const PostInfo = styled.div`
    margin-left: 10px;
    p{
        font-size: 12px;
        color:gray;
    }
    h2{
        font-size: 15px;
    }
    
`;
const PostBody = styled.div`
    overflow-wrap: anywhere;
`;

const PostButton = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default Post
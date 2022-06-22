import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import Post from './Post';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import "firebase/compat/firestore"

function Feed() {
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(docs => (
                {
                    id: docs.id,
                    data: docs.data(),
                }
            )))
        ))
    },[]);

    const sendPost = e =>{
        e.preventDefault();
        db.collection('posts').add({
            name: 'Abhayraj Malviya',
            description: 'this is a post',
            message : input,
            photoUrl : '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        }) ;   
        setInput('');
    }
  return (
    <FeedContainer>
        <FeedInputContainer>
            <FeedInput>
                <CreateIcon/>
                <form>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <button type="submit" onClick={sendPost}>send</button>
                </form>
            </FeedInput>
            <FeedInputOptions>
                <InputOptions Icon={ImageIcon} title="Photo"  color="#70B5F9"/>
                <InputOptions Icon={SubscriptionsIcon} title="Video"  color="#E7A33e"/>
                <InputOptions Icon={EventNoteIcon} title="Event"  color="#C0CBCD"/>
                <InputOptions Icon={EventNoteIcon} title="Write article"  color="#7FC1SE"/>
            </FeedInputOptions>
        </FeedInputContainer>
        {

            
            posts.map(({id, data:{name, description, message, photoUrl}})=>(
                console.log(message),
                <Post
                    key ={id}
                    name = {name}
                    description = {description}
                    message ={message}
                    photoUrl = {photoUrl}
                />
            ))
        }
        {/* <Post 
            name="Abhayraj Malviya" 
            description="this is a test description" 
            message="wow... this worked!"
        /> */}
    </FeedContainer>

  )
}

const FeedContainer = styled.div`
    flex: 0.4;
    margin: 0 20px;
`;

const FeedInputContainer = styled.div`
background-color: #fff;
padding: 10px;
padding-bottom: 20px;
border-radius: 10px;
margin-bottom: 20px;
`;

const FeedInput = styled.div`
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    padding: 10px;
    color: gray;
    padding-left: 15px;

    form{
        display: flex;
        width: 100%;
        input{
            border: none;
            flex: 1;
            margin-left: 10px;
            outline-width: 0;
            font-weight: 600;
        }
        button{
            display : none;
        }
    }
`;
const FeedInputOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export default Feed
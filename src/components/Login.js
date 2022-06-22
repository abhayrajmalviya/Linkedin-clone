import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { login } from '../features/userSlice';
import { auth } from './Firebase';

function Login() {

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [profilePicture,setProfilePicture] = useState('');
    
    const dispatch = useDispatch();

    const register = () =>{
        if (!name){
            return alert("Please Enter a Full Name");
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePicture,
            })
            .then(()=>{
                dispatch(
                    login({
                        email:userAuth.user.email,
                        uid : userAuth.user.uid,
                        displayName: userAuth.user.displayName,
                        photoURL: profilePicture,
                    })
                );    
            })
        })
        .catch(error => alert(error.message));
    };
    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            console.log(userAuth.photoURL);
            dispatch(login({
                email:userAuth.user.email,
                uid : userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL : userAuth.user.photoURL,
                
            }))
        }).catch((error)=>alert(error.message));
        
    };
  return (
    <LoginContainer>
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg" alt="" />
        <LoginContainerBody>
            <LoginContainerBodyHeader>
                <h1>Sign in / Register</h1>
                <p>Stay updated on your professional world</p>
            </LoginContainerBodyHeader>
            <form>
                <input 
                    type="text" 
                    placeholder='Full Name(require if register)' 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input 
                    type="text"  
                    placeholder='Profile pic url (optional)'
                    value={profilePicture}
                    onChange={e => setProfilePicture(e.target.value)} 
                />
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    placeholder="Email"
                />
                <input 
                    type="password" 
                    placeholder='Password'
                    value={password} 
                    onChange= {e => setPassword(e.target.value)} 
                />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p className='register'>Not a member?{" "}
                <span className='login__register' onClick={register}>Register Now</span>
            </p>
        </LoginContainerBody>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
   background-color: white;
   width : 100%;
   img{
        height: 40px;
        padding : 20px;
   }
`;

const LoginContainerBody = styled.div`
    display: grid;
    margin-top: 20px;
    padding-bottom: 20px;
    justify-content: center;
    border-radius: 30px;
    border: 1px solid lightgray;
    margin-left: auto;
    margin-right: auto;
    width: 450px;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);

    .login__register{
        color: #007BB6;
        cursor: pointer;
    }
    .register{
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 20px;
    }

    img {
        object-fit: contain;
        height: 70px;
        margin-top:20px;
        margin-bottom:20px;
    }
    form {
        display:flex;
        flex-direction: column;
        margin-top:20px;

        input{
            width: 350px;
            height: 50px;
            font-size: 20px;
            padding-left: 10px;
            margin-bottom : 20px;
            border-radius: 10px;
        }
        button{
            width: 365px;
            height: 50px;
            font-size: large;
            color: white;
            background-color: #007BB6;
        }
    }
`;

const LoginContainerBodyHeader = styled.div`
    padding-top: 20px;
    h1{
        font-weight : 500;
        font-size : 34px;
    }
    p{
        margin:0px;
        font-weight : 400;
    }
`;
export default Login
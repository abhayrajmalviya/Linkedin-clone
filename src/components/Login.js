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
        {/* <img 
            src="" 
            alt="" 
        /> */}
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
        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
    display: grid;
    place-item: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    padding-bottom: 100px;

    .login__register{
        color: #007BB6;
        cursor: pointer;
    }

    p{
        margin-top: 20px;
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

        input{
            width: 350px;
            height: 50px;
            font-size: 20px;
            padding-left: 10px;
            margin-bottom : 10px;
            border-radius: 10px
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
export default Login
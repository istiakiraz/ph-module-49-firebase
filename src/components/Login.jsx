import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { auth } from './firebase/firebase.init';

const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSign =()=>{
        console.log("google login");

        signInWithPopup(auth, provider)
        .then(result =>{
            console.log(result);

        } )
        .catch(error =>{
            console.log(error);
        } )

    }


    return (
        <div className='text-center mt-10 space-y-4'>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSign} className='btn btn-primary' >Sign in with google</button>
        </div>
    );
};

export default Login;
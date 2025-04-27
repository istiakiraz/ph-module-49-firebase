import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);

  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSign = () => {
    console.log("google login");

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub =() =>{
    signInWithPopup(auth, gitProvider)
    .then(result => {
        console.log(result);
        setUser(result.user.providerData[0])       
    })
    .catch(error => {
        console.log(error);
    })

  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out ok");
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center flex flex-col items-center space-y-4">
      <h2 className="mt-2 text-green-600 font-thin text-4xl">Please Login</h2>

      {user ? (
        <button onClick={handleSignOut} className="btn m-10 btn-primary">
          Sign Out
        </button>
      ) : (
        < div className="flex gap-2 items-center " >
        <button onClick={handleGoogleSign} className="btn btn-primary">
          Sign in with google
        </button> 
        <button onClick={handleGithub}  className="btn bg-black text-white">
          Sign in with Github
        </button> 
        
        </div>
      )}

      {user && (
        <div className="flex items-center flex-col ">
          <h3> User Name: {user.displayName}</h3>
          <p> Email:  {user.email}</p>
          <img className="w-26" src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;

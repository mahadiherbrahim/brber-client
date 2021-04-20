import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import logo from '../../img/logo/logo.png'
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        
        const  googleProvider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider).then((result) => {

            const { displayName, email } = result.user;
            const signedInUser = { name:displayName, email:email }
            console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage,errorCode );
        });

    }

    return (
        <div className="bg-primary" style={{height:'100vh'}}>
            <div className="row">
                <div className="col-md-6 offset-md-3  text-center">
                    <img src={logo} alt="" className="img-fluid mt-5 pt-5"/><br/>
                    <button className="btn btn-outline-success w-100 mt-5 text-white" onClick={handleGoogleSignIn}> <FontAwesomeIcon icon={faGooglePlusG}> </FontAwesomeIcon> Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
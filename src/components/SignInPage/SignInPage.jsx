import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './SignInPage.css'
import { useState } from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import firebase from "gatsby-plugin-firebase"
import { crossOriginResourcePolicy } from 'helmet';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: 10,
            display: 'flex',
            width: '25ch',
        },
        margin: 10,
    },
}));


const SignInPage = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const createAccount = () => {

        console.log(email, password);
        var user = null;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(error);
                if (errorCode === "auth/email-already-in-use") {
                    firebase.auth().signInWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            user = userCredential.user;
                            console.log('caught');
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            });


       // console.log(`test`, firebase.auth().currentUser);
    }


    const checkSignIn = () => {
        console.log(`test`, firebase.auth().currentUser);
    }

    const handleSignOut = () => {
        firebase.auth().signOut();
        checkSignIn();
    }

    const classes = useStyles();
    return (
        <div className="sign-in-main-div">
            <h2>
                Sign in
            </h2>
            <p>
                Sign in or create an account to get started with your own bucket list.
            </p>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField required id="standard-required" label="Email" type="email"
                    onChange={value => setEmail(value.target.value)} />
                <TextField
                    onChange={value => setPassword(value.target.value)}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </form>
            <SimpleButton buttonClick={createAccount} >
                Sign In
            </SimpleButton>
            <SimpleButton buttonClick={checkSignIn} >
                Check
            </SimpleButton>
            <SimpleButton  buttonClick={handleSignOut}>
                Sign Out
            </SimpleButton>
        </div>
    );

}

export default SignInPage;
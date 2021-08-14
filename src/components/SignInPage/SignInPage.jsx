import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './SignInPage.css'
import { useState } from 'react';

import firebase from "gatsby-plugin-firebase"


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


const createAccount = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


const SignInPage = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const classes = useStyles();
    return (
        <div className="sign-in-main-div">
            <form className={classes.root} noValidate autoComplete="off">
                <TextField required id="standard-required" label="Email" type="email"
                    onChange={value => setEmail(value)} />
                <TextField
                    onChange={value => setPassword(value)}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />
            </form>
        </div>
    );

}

export default SignInPage;
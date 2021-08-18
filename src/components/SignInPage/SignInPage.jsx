import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './SignInPage.css'
import { useState } from 'react';
import SimpleButton from '../SimpleButton/SimpleButton';
import firebase from "gatsby-plugin-firebase"
import { redirectTo, navigate } from "@reach/router"
import { useEffect } from 'react';
import Popover from '@material-ui/core/Popover';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: 10,
            display: 'flex',
            width: '25ch',
        },
        margin: 10,
    },
    typography: {
        padding: theme.spacing(2),
    },
}));


const SignInPage = (props) => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [signInSuccessful, setSignInSuccessful] = useState(false);

    const createAccount = () => {

        console.log(email, password);
        var user = null;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user = userCredential.user;
                console.log(user);
                setSignInSuccessful(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(error);
                if (errorCode === "auth/email-already-in-use") {
                    firebase.auth().signInWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            user = userCredential.user;
                            setSignInSuccessful(true);
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


    const [popupOpen, setPopupOpen] = useState(false);

    useEffect(() => {
        if (signInSuccessful) {
            setTimeout(() => {
            navigate('/')
            }, 1500);
            setPopupOpen(true);
        }
    }, [signInSuccessful])

    const classes = useStyles();
    return (
        <div id="sign-in" className="sign-in-main-div">
            <Popover
                id={popupOpen ? 'sign-in-popup' : undefined}
                open={popupOpen}
                anchorEl={document.getElementById('sign-in')}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
            >
                <div className="popover-text-container">
                    <h2 className="popover-text">
                        Sign in successful!
                    </h2>
                </div>
            </Popover>
            <h2>
                Sign in
            </h2>
            <p className="sign-in-paragraph">
                Sign in to view you own bucket list.
            </p>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField required id="standard-required" label="Email" type="email"
                    onChange={value => setEmail(value.target.value)} />
                <TextField
                    required
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
            <p className="sign-in-paragraph">
                Don't have an account? <a className="animate-link">Create one</a> to get started!
            </p>
            <SimpleButton buttonClick={checkSignIn} >
                Check
            </SimpleButton>
            <SimpleButton buttonClick={handleSignOut}>
                Sign Out
            </SimpleButton>
        </div>
    );
}

export default SignInPage;
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
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [signInSuccessful, setSignInSuccessful] = useState(false);


    const [mode, setMode] = useState('sign-in');

    const changeMode = (newMode) => {
        setErrorText(null);
        setMode(newMode);
    }



    const [errorText, setErrorText] = useState(null);


    const createAccount = () => {
        var user = null;
        if (confirmPassword !== password) {
            setErrorText('The passwords do not match.')
        } else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    user = userCredential.user;
                    console.log(user);
                    setSignInSuccessful(true);
                })
                .catch((error) => {
                    var errorCode = error.code;
                    console.log(errorCode);
                    if (errorCode === "auth/email-already-in-use") {
                        setErrorText('This email is already in use!')
                    } else if (errorCode === 'auth/invalid-email') {
                        setErrorText('Please enter a valid email.')
                    }
                });
        }
    }

    const signIn = () => {
        var user = null;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                user = userCredential.user;
                setSignInSuccessful(true);
            })
            .catch((error) => {
                var errorCode = error.code;
                console.log(errorCode);
                if (errorCode === "auth/user-not-found") {
                    setErrorText('An account with this email does not exist.')
                } else if (errorCode === 'auth/wrong-password') {
                    setErrorText('The password is incorrect for this account.')
                }
            })
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
                anchorEl={document.getElementById('sign-in-title')}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <div className="popover-text-container">
                    <h2 className="popover-text">
                        {mode === 'sign-in' ? 'Sign in successful!' : 'Account created successfully!'}
                    </h2>
                </div>
            </Popover>
            <h1 id="sign-in-title">
                {mode === 'sign-in' ? "Sign in" : "Create an Account"}
            </h1>
            <p className="sign-in-paragraph">
                {mode === 'sign-in' ? "Sign in to view" : "Create an account to start"} your own bucket list.
            </p>
            <p className="error-text">
                {errorText}
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
                {mode === 'sign-in' ? null :
                    <TextField
                        required
                        onChange={value => setConfirmPassword(value.target.value)}
                        id="standard-password-input"
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                    />
                }
            </form>

            <SimpleButton buttonClick={mode === 'sign-in' ? signIn : createAccount} >
                {mode === 'sign-in' ? "Sign in" : "Create an Account"}
            </SimpleButton>
            {mode === 'sign-in' ?
                <h4 className="sign-in-paragraph">
                    Don't have an account? <a className="animate-link" onClick={() => changeMode('create')}>Create one</a> to get started!
                </h4>
                :
                <h4 className="sign-in-paragraph">
                    Already have an account? <a className="animate-link" onClick={() => changeMode('sign-in')}>Sign in! </a>
                </h4>
            }
        </div>
    );
}

export default SignInPage;
import ReactModal from 'react-modal';
import React, { useState, useEffect } from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './Modal.css'
import SimpleButton from '../SimpleButton/SimpleButton';
import firebase from "gatsby-plugin-firebase"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#663399',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'red',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: 2,
                borderColor: '#663399',
            },
            '&:hover fieldset': {
                borderColor: '#663399',
            },
            '&.Mui-focused fieldset': {
                borderWidth: 3,
                borderColor: '#663399',
            },
        },
    },
})(TextField);

const Modal = (props) => {
    const { data, submitFunction, isOpen, closeModal, submitFunctionProps, } = props;

    const classes = useStyles();

    const [open, setOpen] = useState(isOpen);

    const [signedIn, setSignedIn] = useState(false);
    const [errorText, setErrorText] = useState(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (!firebase.auth().currentUser) {
                setErrorText('You must be signed in to add a bucket list item.')
                setSignedIn(false);
            } else {
                setErrorText(null);
                setSignedIn(false);
            }
        }
        setOpen(isOpen);
    }, [isOpen])

    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);
    const [url, setUrl] = useState(null);

    const saveFunction = () => {
        submitFunction(name, location, url);
        closeModal();
    }

    const doNothing = () => {
        
    }

    return (
        <ReactModal
            className="Modal"
            isOpen={open}
            appElement={typeof window !== 'undefined' ? document.getElementById('___gatsby') : null} // need this for gatsby to build, can't have access to window elements on server side render
        >
            <h3>
                Add a Bucket List Item
            </h3>
            <form className="Modal-form">
                <CssTextField
                    className={classes.margin}
                    label="Place"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setName(value.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    label="Location"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setLocation(value.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    label="Image Source"
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setUrl(value.target.value)}
                />
            </form>
            <p className="modal-error">
                {errorText}
            </p>
            <div className="Modal-buttons Create-modal-buttons">
                <SimpleButton buttonClick={closeModal}>
                    Close
                </SimpleButton>
                <SimpleButton buttonClick={signedIn ? saveFunction : doNothing }>
                    Add
                </SimpleButton>
            </div>
        </ReactModal>
    )
}

export default Modal;
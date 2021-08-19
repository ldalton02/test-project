import ReactModal from 'react-modal';
import React, { useState, useEffect } from 'react';
import {
    alpha,
    ThemeProvider,
    withStyles,
    makeStyles,
    createTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import './Modal.css'
import SimpleButton from '../SimpleButton/SimpleButton';
import SimpleButtonGroup from '../SimpleButtonGroup/SimpleButtonGroup';

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

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])

   
   const [name, setName] = useState(null);
   const [location, setLocation] = useState(null);
   const [url, setUrl] = useState(null);
   
    const saveFunction = () => {
        submitFunction(name, location, url);
        closeModal();
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
            <div className="Modal-buttons Create-modal-buttons">
                <SimpleButton buttonClick={closeModal}>
                    Close
                </SimpleButton>
                <SimpleButton buttonClick={saveFunction}>
                    Save
                </SimpleButton>
            </div>
        </ReactModal>
    )
}

export default Modal;
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

const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: '#663399',
            borderWidth: 3,
        },
        '& input:invalid + fieldset': {
            borderColor: 'black',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            borderColor: '#663399',
            borderWidth: 3,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);

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


    const saveFunction = () => {
        if (submitFunctionProps) {
            
        }
        submitFunction();
    }
    if (submitFunctionProps) {

    }

    return (
        <ReactModal
            className="Modal"
            isOpen={open}
            appElement={document.getElementById('___gatsby')}
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
                />
                <CssTextField
                    className={classes.margin}
                    label="Location"
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                />
                <CssTextField
                    className={classes.margin}
                    label="Image Source"
                    variant="outlined"
                    id="validation-outlined-input"
                />
            </form>
            <div className="Modal-buttons">
                <SimpleButton buttonClick={closeModal}>
                    Close
                </SimpleButton>
                <SimpleButton buttonClick={submitFunction}>
                    Save
                </SimpleButton>
            </div>
        </ReactModal>
    )
}

export default Modal;
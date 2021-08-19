import ReactModal from 'react-modal';
import React, { useState, useEffect } from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

import './Modal.css'
import SimpleButton from '../SimpleButton/SimpleButton';

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

const EditModal = (props) => {
    const { saveEdits, isOpen, closeModal, values, deleteItem } = props;

    const classes = useStyles();

    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen])


    useEffect(() => {
        setName(values.name);
        setLocation(values.location);
        setUrl(values.url);
        setIndex(values.index);
    }, [values]);

    const [name, setName] = useState(values.name);
    const [location, setLocation] = useState(values.name);
    const [url, setUrl] = useState(values.url);
    const [index, setIndex] = useState(values.index);

    const saveButton = () => {
        saveEdits(name, location, url, values.index);
        closeModal();
    }

    return (
        <ReactModal
            className="Modal"
            isOpen={open}
            appElement={document.getElementById('___gatsby')}
        >
            <h3>
                Edit a Bucket List Item
            </h3>
            <form className="Modal-form">
                <CssTextField
                    className={classes.margin}
                    label="Place"
                    defaultValue={values.name}
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setName(value.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    label="Location"
                    defaultValue={values.location}
                    required
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setLocation(value.target.value)}
                />
                <CssTextField
                    className={classes.margin}
                    defaultValue={values.url}
                    label="Image Source"
                    variant="outlined"
                    id="validation-outlined-input"
                    onChange={value => setUrl(value.target.value)}
                />
            </form>
            <div className="Modal-buttons Edit-modal-buttons">
                <SimpleButton buttonClick={closeModal}>
                    Close
                </SimpleButton>
                <SimpleButton buttonClick={() => deleteItem(values.index)}
                    deleteButton={true}>
                    Delete This Item
                </SimpleButton>
                <SimpleButton buttonClick={saveButton}>
                    Save
                </SimpleButton>
            </div>
        </ReactModal>
    )
}

export default EditModal;
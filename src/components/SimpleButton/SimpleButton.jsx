import { Button } from '@material-ui/core';
import React from 'react'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
    root: {
        color: 'white',
        backgroundColor: '#663399',
        '&:hover': {
            backgroundColor: '#51287a',
        },
    },
}))(Button);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

const SimpleButton = (props) => {
    const { buttonClick, deleteButton } = props;

    const classes = useStyles();

    const clickFunction = () => {
        buttonClick();
    }

    if (deleteButton) {
        return (
            <Button  onClick={clickFunction} variant="contained"  color="secondary" className={classes.margin} >
                {props.children}
            </Button>
        );
    } else {
        return (
            <ColorButton onClick={clickFunction} variant="contained" color="primary" className={classes.margin}>
                {props.children}
            </ColorButton>
        );
    }
}

export default SimpleButton;
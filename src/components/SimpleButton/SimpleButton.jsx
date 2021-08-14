import { Button } from '@material-ui/core';
import React from 'react'
import { createTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { green, purple } from '@material-ui/core/colors';


const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(green[500]),
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
    const { buttonClick, label } = props;

    const classes = useStyles();

    const clickFunction = () => {
        console.log('called');
        buttonClick();
    }

    return (
        <ColorButton onClick={() => clickFunction()} variant="contained" color="primary" className={classes.margin}>
            {props.children}
        </ColorButton>
    );
}

export default SimpleButton;
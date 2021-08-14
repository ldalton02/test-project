import React from 'react'
import {
    ButtonGroup,
    Button
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
        
    },
}));

const SimpleButtonGroup = (props) => {

    const { setDisplay } = props;

    const classes = useStyles();

    return (
        <ButtonGroup variant="contained" color="primary" className={classes.margin}> 
            <Button onClick={() => setDisplay('wordcloud')}>Word Cloud</Button>
            <Button onClick={() => setDisplay('suggestions')}> Suggestions </Button>
        </ButtonGroup>
    );
}

export default SimpleButtonGroup;
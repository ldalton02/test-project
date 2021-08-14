import React, { useState } from 'react';
import ListCard from './ListCard/ListCard';
import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./BucketList.css"
import SimpleButton from '../SimpleButton/SimpleButton';
import { getDefaultItems } from '../../utils/suggestions';


const currentDisplay = {
    title: 'test',
    location: 'test',
    media: 'Paris',
}

const useStyles = makeStyles((theme) =>
    createStyles({
        cardGrid: {
            flexGrow: 1,
        },
    }),
);


const BucketList = (props) => {

    const { changeModalStatus } = props;

    const classes = useStyles();

    const [renderItems, setRenderItems] = useState(getDefaultItems());

    const renderDisplayItems = () => {
        return renderItems.map((item, index) => {
            return (
                <Grid key={index} item
                >
                    <ListCard place={item.place} location={item.location}
                        url={item.url}
                        cardClick={changeModalStatus} />
                </Grid>
            )
        })
    }

    const addNewItem = (place, location, url) => {
        const newItem = {
            place: place,
            location: location,
            url: url,
        }
        setRenderItems([...renderItems, newItem]);
    }


    const bucketListButtonClick = () => {
        changeModalStatus(true);
    }

    return (
        <div>
            <div className="top-grid">
                <h2 className="bucket-list-title">
                    My Bucket List
                </h2>
                <div className="button-container">
                    <SimpleButton buttonClick={bucketListButtonClick}>
                        Add an Item
                    </SimpleButton>
                </div>
            </div>
            <Container justifyContent='center' className={classes.cardGrid} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    {renderDisplayItems()}
                </Grid>
            </Container>
        </div>
    );
}


export default BucketList;
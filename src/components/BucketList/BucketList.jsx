import React, { useState, useEffect } from 'react';
import ListCard from './ListCard/ListCard';
import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./BucketList.css"
import SimpleButton from '../SimpleButton/SimpleButton';
import { getDefaultItems } from '../../utils/suggestions';
import firebase from "gatsby-plugin-firebase"
import { getPlaceData } from '../FirebaseHelper/FirebaseHelper';
import Modal from '../OpenModal/Modal';

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


const addToDataBase = () => {

}


const BucketList = (props) => {
    const { changeModalStatus } = props;
    const classes = useStyles();
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [renderItems, setRenderItems] = useState(getDefaultItems());

    const [userData, setUserData] = useState(null);

    async function getData() {
        await getPlaceData();
    }

    useEffect(() => {
        return firebase.auth().onAuthStateChanged((im) => {
            if (im) {
                console.log(im);
                setSignedIn(true);
                setUser({
                    displayName: im.displayName,
                    email: im.email,
                    photo: im.photoURL,
                    uid: im.uid,
                });
                getPlaceData()
                    .then(res => {
                        setUserData(res);
                    })
            } else {
                setSignedIn(false);
            }
        });
    }, []);

    const renderDisplayItems = () => {
        if (renderItems.length === 0) {
            return (<p>
                Add some items to your list to see them here!
            </p>)
        }
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
        console.log(userData);
        changeModalStatus(true);
    }


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    }

    return (
        <div>
            <Modal
                closeModal={() => setModalOpen(false)}
                isOpen={modalOpen} />
            <div className="top-grid">
                <h2 className="bucket-list-title">
                    My Bucket List
                </h2>
                <div className="button-container">
                    <SimpleButton buttonClick={openModal}>
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
            <p> Sign in to create your own bucket list! </p>
        </div>
    );
}


export default BucketList;
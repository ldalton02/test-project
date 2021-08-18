import React, { useState, useEffect, useCallback } from 'react';
import ListCard from './ListCard/ListCard';
import { createStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./BucketList.css"
import SimpleButton from '../SimpleButton/SimpleButton';
import { getDefaultItems } from '../../utils/suggestions';
import firebase from "gatsby-plugin-firebase"
import { getPlaceData, getUserBucketList, addBucketListItem } from '../FirebaseHelper/FirebaseHelper';
import Modal from '../OpenModal/Modal';
import LoadingIcons from 'react-loading-icons'


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

    const [readyToDisplay, setReadyToDisplay] = useState(false);

    const [user, setUser] = useState(firebase.auth().currentUser);


    const [renderItems, setRenderItems] = useState(null);

    function setUserDatas(im, callback) {
        console.log(`called setuserdatas`);
        setSignedIn(true);
        console.log(`user`, user);
        console.log(im);
        callback(im.uid);
    }

    function getUserRenderItems(uid) {
        console.log(`callback called`);
        let data = [];
        firebase.database().ref(`/userData/${uid}`).once('value')
            .then(snapshot => {
                snapshot.forEach(each => {
                    data.push(each.exportVal());
                })
                setRenderItems(data);
            })
    }

    useEffect(() => {
        if (firebase.auth().currentUser) {
            setUserDatas(firebase.auth().currentUser, getUserRenderItems);
        } else {
            setSignedIn(false);
            setReadyToDisplay(true);
            setRenderItems(getDefaultItems());
        }
    }, []);

    useEffect(() => {
        if (renderItems) {
            setTimeout(() => {
            setReadyToDisplay(true);
            }, 1000);
        }
    }, [renderItems])

    const renderDisplayItems = () => {
        if (renderItems.length === 0) {
            return (<p>
                Add some items to your list to see them here!
            </p>)
        }
        if (renderItems) {
            return renderItems.map((item, index) => {
                return (
                    <Grid key={index} item
                    >
                        <ListCard place={item.place} location={item.location}
                            url={item.url}
                            cardClick={openModal} />
                    </Grid>
                )
            })
        } else {
            return null;
        }
    }

    const addNewItem = (place, location, url) => {
        const newItem = {
            place: place,
            location: location,
            url: url,
        }
        addBucketListItem(place, location, url, user.uid);
        getUserRenderItems(firebase.auth().currentUser.uid);
    }


    const bucketListButtonClick = () => {
        changeModalStatus(true);
    }


    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        console.log(user.uid)
        setModalOpen(true);
    }

    return (
        <div>
            <Modal
                closeModal={() => setModalOpen(false)}
                isOpen={modalOpen}
                submitFunction={addNewItem}
                submitFunctionProps />
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
            <Container justifycontent='center' className={classes.cardGrid} maxWidth="xl">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={2}
                >
                    {readyToDisplay ? renderDisplayItems() : <LoadingIcons.Bars fill="#663399" />}
                </Grid>
            </Container>
        </div>
    );
}


export default BucketList;
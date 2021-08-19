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
import { getPlaceData, getUserBucketList, addBucketListItem , updateDatabase} from '../FirebaseHelper/FirebaseHelper';
import Modal from '../OpenModal/Modal';
import LoadingIcons from 'react-loading-icons'
import EditModal from '../OpenModal/EditModal';

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


    const [signedIn, setSignedIn] = useState(false);
    const [readyToDisplay, setReadyToDisplay] = useState(false);
    const [user, setUser] = useState(firebase.auth().currentUser);
    const [renderItems, setRenderItems] = useState(null);


    // BEFORE RENDER, IF USER IS LOGGED IN FETCH DATA, OTHERWISE SHOW DEFAULT LIST
    useEffect(() => {
        if (firebase.auth().currentUser) {
            setUserDatas(firebase.auth().currentUser, getUserRenderItems);
        } else {
            setSignedIn(false);
            setReadyToDisplay(true);
            setRenderItems(getDefaultItems());
        }
    }, []);

    // WHEN RENDER ITEMS IS SET, SET READY TO DISPLAY TO REMOVE LOADING ICON
    useEffect(() => {
        if (renderItems) {
            setTimeout(() => {
                setReadyToDisplay(true);
            }, 1000);
        }
    }, [renderItems])

    /// RETRIEVING USER DATA FROM FIREBASE
    function setUserDatas(im, callback) {
        setSignedIn(true);
        callback(im.uid);
    }

    function getUserRenderItems(uid) {
        let data = [];
        firebase.database().ref(`/userData/${uid}`).once('value')
            .then(snapshot => {
                snapshot.forEach(each => {
                    data.push(each.exportVal());
                })
                setRenderItems(data);
            })
    }

    // CREATE DISPLAY ITEMS FROM DATA
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
                        <ListCard place={item.name} location={item.location}
                            url={item.url}
                            index={index}
                            cardClick={openEditModal} />
                    </Grid>
                )
            })
        } else {
            return null;
        }
    }

    // OPENING EDIT MODAL
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [editModalProps, setEditModalProps] = useState({
        name: '',
        location: '',
        url: '',
        index: '',
    })
    const openEditModal = (index) => {
        let toPass = {
            name: renderItems[index].name,
            location: renderItems[index].location,
            url: renderItems[index].url,
            index: index,
        }
        setEditModalProps(toPass);
        setEditModalOpen(true);
    }
    const saveEdits = (name, location, url, index) => {
        let newValue = {
            name: name,
            location: location,
            url: url,
        }
        let renderItemsCopy = renderItems;
        renderItemsCopy[index] = newValue;
        setRenderItems([...renderItemsCopy]);
        updateDatabase(renderItems, firebase.auth().currentUser.uid);
    }

    // NEED TO PERSIST ITEMS IN DATABASE ONCE SAVED?
    
    // OPENING ADD NEW ITEM MODAL
    const [modalOpen, setModalOpen] = useState(false);
    const addNewItem = (place, location, url) => {
        addBucketListItem(place, location, url, user.uid);
        getUserRenderItems(firebase.auth().currentUser.uid);
    }
    const openModal = () => {
        setModalOpen(true);
    }

    // deleting an item
    const deleteItem = (indexToDelete) => {
        const renderItemsCopy = renderItems.filter((each, index) => {
            return (index !== indexToDelete);
        })
        setRenderItems([...renderItemsCopy]);
        updateDatabase(renderItems, firebase.auth().currentUser.uid);
        setEditModalOpen(false);
    }

    return (
        <div>
            <Modal
                closeModal={() => setModalOpen(false)}
                isOpen={modalOpen}
                submitFunction={addNewItem} />
            <EditModal
                closeModal={() => setEditModalOpen(false)}
                isOpen={editModalOpen}
                saveEdits={saveEdits}
                values={editModalProps}
                deleteItem={deleteItem}
            />
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
            {!signedIn &&
                <div className="default-notice"><h3>
                    This is the default bucket list. Sign in to create your own!
                </h3></div>}
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
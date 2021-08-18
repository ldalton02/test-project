import React from 'react';
import firebase from "gatsby-plugin-firebase"
import { snapshotToArray, getWordCloudData } from '../../utils/firebasedata';


export const getPlaceData = async () => {
    var toReturn;
    await firebase.database().ref('/places').once('value').then(snapshot => {
        let data = snapshotToArray(snapshot);
        toReturn = data;
        return data;
    })
    return toReturn;
}


export const addBucketListItem = (name, location, url, uid) => {
    var toStore = {
        name: name,
        location: location,
        url: url,
    };

    firebase.database().ref(`/userData/${uid}`).push(toStore).then(res => {
        console.log(res);
    }).catch(err => console.log(err));
}


const fetchUserDataFromServer = uid => {
    firebase.database().ref(`/userData/${uid}`).once('value').then(snapshot => {return snapshot})
}

export const getUserBucketList = (uid) => {
    let promise = fetchUserDataFromServer(uid);
    console.log(promise);
}
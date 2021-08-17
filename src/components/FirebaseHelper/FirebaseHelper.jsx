import React from 'react';
import firebase from "gatsby-plugin-firebase"
import { snapshotToArray, getWordCloudData } from '../../utils/firebasedata';


export const getPlaceData = async () => {
    var toReturn;
    await firebase.database().ref('/places').once('value').then(snapshot => {
        let data = snapshotToArray(snapshot);
        console.log(`firebasehelper`, data);
        toReturn = data;
        return data;
    })
    return toReturn;
}


export const addBucketListItem = async (name, location, url) => {
    var toStore = {
        name: name,
        location: location,
        url: url,
    };


}

export const getUserBucketList = async (uid) => {
    var toReturn;
    await firebase.database.ref(`/userData/${uid}`).once('value').then(snapshot => {
        let data = snapshot;
        console.log(data);
        toReturn = data;
        return data;
    })
    return toReturn;
}
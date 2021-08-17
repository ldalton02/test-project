import React, { useEffect, useState } from 'react'
import axios from 'axios';
import WordCloud from './elements/WordCloud/WordCloud';
import Suggestion from './elements/Suggestions/Suggestions';
import Grid from '@material-ui/core/Grid';
import SimpleButtonGroup from '../SimpleButtonGroup/SimpleButtonGroup';
import LoadingIcons from 'react-loading-icons'
import firebase from "gatsby-plugin-firebase"
import { snapshotToArray, getWordCloudData } from '../../utils/firebasedata';
import { getSuggestionData } from '../../utils/suggestions';


import './Ideas.css'


const Ideas = (props) => {

    const [suggestionData, setSuggestionData] = useState(null);
    const [wordCloudData, setWordCloudData] = useState(null);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        // fetch data for suggestions card
        setSuggestionData(getSuggestionData());

        // fetch data for word cloud
        firebase.database().ref('/').once('value').then(snapshot => {
            let data = snapshotToArray(snapshot);
            let wcData = getWordCloudData(data);
            console.log(wcData);

            setTimeout(() => {
                setWordCloudData(wcData);
                setDataLoaded(true);
            }, 2000);
        })


        // to-do fetch data for bucket list, if exists && signed in
    }, []); 

    if (!dataLoaded) {
        return (
            <div id="loading-div">
                <LoadingIcons.Bars fill="#663399" />
            </div>);
    } else {
        return (
            <div>
                <div className="main-title">
                    <h1>Look no further for your next travel destination.</h1>
                </div>
                <h2 className="text-align-center">
                    Some words for thought:
                </h2>
                <div className="wordcloud-container">
                    <div className="wordcloud-description">
                        <p className="wordcloud-label">
                            The words displayed in the word cloud are the most commonly found words in the top Google results for Bucket List Ideas.
                        </p>
                    </div>
                   { <WordCloud words={wordCloudData} /> }
                </div>

                <h2 className="text-align-center">
                    A few more suggestions:
                </h2>
                <div className="suggestion-container">
                    <p>
                        The cards below are just a few more suggestions of some popular bucket list destinations.
                    </p>
                    <Suggestion data={suggestionData} />
                </div>
            </div >
        );
    } 
}

export default Ideas;
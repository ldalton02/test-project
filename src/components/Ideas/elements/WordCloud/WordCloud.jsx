import React, { useEffect, useState } from 'react';

import { Resizable } from 're-resizable';
import ReactWordcloud from 'react-wordcloud';
import './WordCloud.css'


const callbacks = {
    getWordColor: word => word.value > 50 ? "#ffffff" : "#000000",
    onWordClick: word => null,
    onWordMouseOver: console.log,
    getWordTooltip: word => null,
};

const options = {
    colors: ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', '#8c564b'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [12, 30],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0, 0],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
};

const resizeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    width: '100%',
};



/*
words is of format


*/


const WordCloud = (props) => {
    const { words } = props;

    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        if (words) { setChartData(words.splice(0, 20)) }
    }, [])

    return (
        <div className="container-div">
        <ReactWordcloud
            callbacks={callbacks}
            options={options}
            // size={size}
            words={words}
        />
        </div>
    );
};
export default WordCloud;
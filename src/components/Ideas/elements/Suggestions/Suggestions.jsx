
import React, { useEffect, useState } from 'react'
import SimpleCard from '../../../SimpleCard/SimpleCard';



const Suggestion = (props) => {

    const { data } = props;

    const [index, setIndex] = useState(0);

    const setCurrentIndex = () => {
        let index = Math.floor(Math.random(0, 9) * 10);
        setIndex(index);
    }

    useEffect(() => {
        setCurrentIndex()
    }, [])


    let currentDisplay;

    if (data) {
        currentDisplay = data[index]
    }

    return (
        <SimpleCard
            currentDisplay={currentDisplay}
            getAnother={setCurrentIndex}
        />
    );
}

export default Suggestion;
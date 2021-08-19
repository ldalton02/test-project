import React, { useEffect, useState } from 'react'
import './HomePage.css';
import Ideas from '../Ideas/Ideas'
import BucketList from '../BucketList/BucketList';
import Modal from '../OpenModal/Modal';
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"

const HomePage = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const changeModalStatus = (status) => {
        console.log('open modal called');
        setModalOpen(status);
    }

    return (
        <div className="homePage">
            <h1 id="main-title">
                Welcome to Make a Bucket List!
            </h1>

            <div className="main-description">
                <h3 className="text-align-center">
                    Have you been yearning for some new adventures or to check some things off your bucket list?
                </h3>
                <p>
                    Use Make a Bucket List to help decide what your next big adventure will be!
                </p>
                <p>
                    Some suggestions to help you find your next destination can be found on the
                    <Link className='homepage-link' to="/suggestions"> <a className="animate-link"> suggestions page </a> </Link>.
                </p>
                <p>
                    You can also directly edit your own bucket list on the home page here!
                </p>
            </div>

            <BucketList changeModalStatus={changeModalStatus} />
        </div>
    );
}

export default HomePage;
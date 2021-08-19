import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
import firebase from "gatsby-plugin-firebase"
import Popover from '@material-ui/core/Popover';
import { redirectTo, navigate } from "@reach/router"


const headerLinks = [
    <Link className="header-link" to="/"> Bucket List </Link>,
    <Link className="header-link" to='/suggestions' > Suggestions </Link>,
    <Link className="header-link" to="/sign-in"> Sign In </Link>,
    <Link className="header-link" to='/sign-out'> Sign Out </Link>
];




const Header = (props) => {

    const { siteTitle } = props;

    const [isSignedIn, setIsSignedIn] = useState(typeof window !== 'undefined' ?
        (firebase.auth().currentUser ? true : false)
        :
        null);

    useEffect(() => {
        if (firebase.auth().currentUser) {
            setIsSignedIn(true);
        } else {
            setIsSignedIn(false);
        }
    }, [firebase.auth().currentUser])

    const [popupOpen, setPopupOpen] = useState(false);
    const handleSignOut = () => {
        setPopupOpen(true);
        setTimeout(() => {
            navigate('/sign-out/')
        }, 1500);
    }

    return (
        <header
            style={{
                background: `rebeccapurple`,
            }}
        >
            <Popover
                id={'sign-out-popup' }
                open={popupOpen}
                //anchorEl={'#sign-in-title'}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <div className="popover-text-container">
                    <h2 className="popover-text">
                        Signed out successfully!
                    </h2>
                </div>
            </Popover>
            <div className="outer-header">
                <div>
                    <h1 style={{ margin: 0 }}>
                        <Link
                            to="/"
                            style={{
                                color: `white`,
                                textDecoration: `none`,
                            }}
                        >
                            {siteTitle}
                        </Link>
                    </h1>
                </div>
                <div className="header-links">
                    <h4 className="header-h4">
                        <Link className="header-link" to="/"> Bucket List </Link>
                    </h4>
                    <h4 className="header-h4">
                        <Link className="header-link" to='/suggestions' > Suggestions </Link>
                    </h4>
                    <h4 className="header-h4">
                        <Link className="header-link" to="/sign-in"> Sign In </Link>
                    </h4>
                    { isSignedIn && 
                        <h4 className="header-h4" onClick={handleSignOut}>
                            <Link className="header-link"> Sign Out </Link>
                        </h4>
                    }
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header

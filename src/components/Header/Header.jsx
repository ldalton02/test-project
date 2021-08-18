import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'
import firebase from "gatsby-plugin-firebase"

const handleSignOut = () => {
    firebase.auth().signOut();
}


const headerLinks = [
    <Link className="header-link" to="/"> Bucket List </Link>,
    <Link className="header-link" to='/suggestions' > Suggestions </Link>,
    <Link className="header-link" to="/sign-in"> Sign In </Link>,
    <Link className="header-link" to='/sign-out'> Sign Out </Link>
];




const Header = (props) => {

    const { siteTitle } = props;


    const renderHeaderLinks = () => {
        const array = headerLinks.map((item, index) => {
            return (
                <h4 key={index} className="header-h4">
                    {item}
                </h4>);
        })

        return array;
    }

    return (
        <header
            style={{
                background: `rebeccapurple`,
            }}
        >
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
                    {renderHeaderLinks()}
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

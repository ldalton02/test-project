import React, {useState} from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'


const headerLinks = [
    <Link className="header-link" to="/"> Bucket List </Link>,
    <Link className="header-link" to='/suggestions' > Suggestions </Link>,
    <Link className="header-link" to="/sign-in"> Sign In </Link>,
    <Link className="header-link" to='/sign-out'> Sign Out </Link>
];




const Header = (props) => {

    const { siteTitle } = props;

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
                    <h4 className="header-h4">
                        <Link className="header-link" to="/"> Bucket List </Link>
                    </h4>
                    <h4 className="header-h4">
                        <Link className="header-link" to='/suggestions' > Suggestions </Link>
                    </h4>
                    <h4 className="header-h4">
                        <Link className="header-link" to="/sign-in"> Sign In </Link>
                    </h4>
                    <h4 className="header-h4">
                        <Link className="header-link" to='/sign-out'> Sign Out </Link>
                    </h4>
                    
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

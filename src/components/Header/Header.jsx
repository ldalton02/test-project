import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import './Header.css'

const headerLinks = [
    <Link className="header-link" to="/sign-in"> Sign In </Link>,
    <Link className="header-link" to="/"> Bucket List </Link>,
    <Link className="header-link" to='/suggestions' > Suggestions </Link>
];




const Header = (props) => {

    const { siteTitle, links } = props;


    const renderHeaderLinks = () => {
        return headerLinks.map(item => {
            return (
                <h4 className="header-h4">
                    {item}
                </h4>);
        })
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

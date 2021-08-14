import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"


const headerLinks = [
  <Link to="/"> Bucket List </Link>,
  <Link to='/suggestions' > Suggestions </Link>
];




const Header = (props) => {

  const { siteTitle, links } = props;


  const renderHeaderLinks = () => {
    return headerLinks.map(item => {
      return item;
    })
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
      }}
    >
      <div
        style={{
          margin: `0 0`,
          width: '100%',
          minHeight: '8vh',
          display: 'grid',
          alignItems: 'center',
          padding: '0 0 0.3em 0.5em',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: 'auto',
        }}
      >
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
        <div>
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

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { FaTwitterSquare, FaFacebookSquare, FaInstagram } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header>
    <div className="socialIcons">
      <a href="https://twitter.com/reido90" target="_blank">
        <FaTwitterSquare size={40} />
      </a>
      <a href="https://www.facebook.com/DavidReidoNI" target="_blank">
        <FaFacebookSquare size={40} />
      </a>
      <a href="https://www.instagram.com/reido90/" target="_blank">
        <FaInstagram size={40} />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

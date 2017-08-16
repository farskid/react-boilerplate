import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const Header = props => {
  const { backButton, to } = props
  return (
    <header className={`pm-header ${backButton && 'header-has-back'}`}>
      {
        backButton &&
        <Link to={to} className="btn btn-default btn-small pm-back-button">مرحله قبل</Link>
      }
      <h1 className="pm-brand">پایه ایم</h1>
    </header>
  )
}

Header.PropTypes = {
  backButton: PropTypes.bool,
  to: PropTypes.string
}

Header.defaultProps = {
  backButton: false
}

export default Header

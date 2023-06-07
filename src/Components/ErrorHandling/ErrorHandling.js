import React from "react"
import './ErrorHandling.css'
import PropTypes from 'prop-types'

const ErrorHandling = ({ errorMessage }) => {
  return (
    <div>
      <h2 className="error-message">An error occurred... {errorMessage}</h2>
    </div>
  )
}

ErrorHandling.propTypes = {
  errorMessage: PropTypes.string.isRequired
}

export default ErrorHandling;


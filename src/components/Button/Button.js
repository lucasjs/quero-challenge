import React from 'react'
import PropTypes from 'prop-types'

import styles from './Button.css'

const Button = ({
  children,
  handleClick,
  type
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={() => handleClick()}
      disabled={type === 'disabled'}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  handleClick: null,
  type: 'primary'
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'disabled'])
}

export default Button

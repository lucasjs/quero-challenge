import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './Rating.css'

const Rating = ({
  value
}) => {
  return (
    <div className={styles.rating}>
      <span className={styles.value}>
        {value}
      </span>
      <div className={styles.stars}>
        {[...Array(Math.trunc(value))].map((_, index) => (
          <span className={styles.star} key={index}>
            <FontAwesomeIcon icon={faStar} />
          </span>
        ))}
      </div>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired
}

export default Rating

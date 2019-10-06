import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Card.css'

const AddCard = ({
  addCourse,
  title,
  subtitle
}) => {
  return (
    <div className={styles.addCard} onClick={() => addCourse()}>
      <span className={styles.addCardIcon}>
        <FontAwesomeIcon icon={['fas', 'plus-circle']} size="4x" />
      </span>
      <div className={styles.addCardText}>
        <span className={styles.addCardTitle}>
          {title}
        </span>
        <span className={styles.addCardSubtitle}>
          {subtitle}
        </span>
      </div>
    </div>
  )
}

AddCard.defaultProps = {
  subtitle: null
}

AddCard.propTypes = {
  addCourse: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

export default AddCard

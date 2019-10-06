import React from 'react'
import PropTypes from 'prop-types'

import styles from './SegmentedControls.css'

const SegmentedControls = ({
  handleChange,
  name,
  options,
  value
}) => {
  return (
    <div className={styles.controls}>
      {options && options.map(item => (
        <label
          key={item.id}
          className={styles.item}
          htmlFor={`item-${item.id}`}
        >
          <input
            className={styles.input}
            checked={value === item.value}
            id={`item-${item.id}`}
            name={name}
            onChange={() => handleChange(item.value)}
            type="radio"
            value={item.value}
          />
          <span className={styles.label}>{item.title}</span>
        </label>
      ))}
    </div>
  )
}

SegmentedControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    value: PropTypes.string
  })).isRequired,
  value: PropTypes.string.isRequired
}

export default SegmentedControls

import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import styles from './TableRow.css'

const TableRow = ({
  courseLevel,
  courseName,
  discountPercentage,
  handleChange,
  id,
  priceWithDiscount,
  universityLogo,
  universityName
}) => {
  return (
    <tr id={id}>
      <th scope="row">
        <input
          type="checkbox"
          onChange={() => handleChange()}
        />
      </th>
      <td className={styles.universityLogo}>
        <img src={universityLogo} alt={`Logo ${universityName}`}/>
      </td>
      <td className={styles.courseInfo}>
        <strong>
          {courseName}
        </strong>
        <br />
        {courseLevel}
      </td>
      <td className={styles.courseDiscount}>
        Bolsa de&nbsp;
        <strong>
          {Math.trunc(discountPercentage)}%
        </strong>
        <br />
        <strong>
          {priceWithDiscount.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
          })}/mês
        </strong>
      </td>
    </tr>
  )
}

TableRow.propTypes = {
  courseName: PropTypes.string.isRequired,
  courseLevel: PropTypes.string.isRequired,
  discountPercentage: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  priceWithDiscount: PropTypes.number.isRequired,
  universityLogo: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired
}

export default TableRow

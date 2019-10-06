import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { omit } from 'ramda'

import { FiltersContext } from './AddGrants'

import styles from './Filters.css'

const Filters = ({
  courses
}) => {
  const {
    filters,
    setFilters
  } = useContext(FiltersContext)

  const [campusCities, setCampusCities] = useState([])
  const [coursesNames, setCoursesNames] = useState([])
  const [coursesKind, setCoursesKind] = useState([])

  useEffect(() => {
    let campusCities = courses.map(item => item.campus.city)
    campusCities = [...new Set(campusCities)]
    setCampusCities(campusCities.sort())

    let coursesNames = courses.map(item => item.course.name)
    coursesNames = [...new Set(coursesNames)]
    setCoursesNames(coursesNames.sort())

    let coursesKind = courses.map(item => item.course.kind)
    coursesKind = [...new Set(coursesKind)]
    setCoursesKind(coursesKind)
  }, [courses])

  const handleCampusCity = e => {
    const removeCampusCity = omit(['campusCity'], filters)
    e.target.value
    ? setFilters({
        ...filters,
        campusCity: e.target.value
      })
    : setFilters(removeCampusCity)
  }

  const handleCourseName = e => {
    const removeCourseName = omit(['courseName'], filters)
    e.target.value
    ? setFilters({
        ...filters,
        courseName: e.target.value
      })
    : setFilters(removeCourseName)
  }

  return (
    <div className={styles.filters}>
      {campusCities &&
        <div className={styles.filtersCities}>
          <label htmlFor="citySelect" className={styles.filtersTitle}>
            Selecione sua cidade
          </label>
          <select
            id="citySelect"
            value={filters.campusCity}
            onChange={e => handleCampusCity(e)}>
            <option value=''></option>
            {campusCities && campusCities.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
      }
      {coursesNames &&
        <div className={styles.filtersCourses}>
          <label htmlFor="courseSelect" className={styles.filtersTitle}>
            Selecione o curso de sua preferência
          </label>
          <select
            id="courseSelect"
            value={filters.courseName}
            onChange={e => handleCourseName(e)}>
          >
            <option value=''></option>
            {coursesNames && coursesNames.map((item, index) => (
                <option key={index} value={item}>{item}</option>
              ))
            }
          </select>
        </div>
      }
      {coursesKind &&
        <div className={styles.filtersKind}>
          <span className={styles.filtersTitle}>
            Como você quer estudar?
          </span>
          <div className={styles.filtersCheckboxes}>
            {coursesKind.map((item, index) => (
                <div key={index} className={styles.filtersCheckbox}>
                  <input
                    type="checkbox"
                    id={`check${item}`}
                    value={item}
                  />
                  <label htmlFor={`check${item}`}>{item}</label>
                </div>
              ))
            }
          </div>
        </div>
      }
      <div className={styles.filtersPrice}>
        <span className={styles.filtersTitle}>
          Até quanto pode pagar?
        </span>
      </div>
    </div>
  )
}

Filters.propTypes = {
  courses: PropTypes.array.isRequired
}

export default Filters

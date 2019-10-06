import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ascend,
  isEmpty,
  path,
  sortWith
} from 'ramda'

import Button from 'components/Button'
import Modal from 'components/Modal'
import TableRow from 'components/TableRow'
import Filters from './Filters'
import { CoursesContext } from 'App'

import styles from './AddGrants.css'

export const FiltersContext = createContext()

const AddGrants = () => {
  const {
    courses,
    selectCourses,
    setSelectCourses,
    favoriteCourses,
    setFavoriteCourses,
    modal,
    setModal
  } = useContext(CoursesContext)

  const [filters, setFilters] = useState({})
  const [checkedCourses, setCheckedCourses] = useState([])
  const [filterSelectCourses, setFilterSelectCourses] = useState([])

  useEffect(() => {
    const sortList = sortWith([
      ascend(path(['university', 'name'])),
      ascend(path(['course', 'name']))
    ])
    setSelectCourses(sortList(courses))
  }, [courses])

  useEffect(() => {
    if(isEmpty(filters)) {
      setFilterSelectCourses(selectCourses)
    }
    else if(filters.courseName && filters.campusCity) {
      const selectBy = selectCourses
        .filter(item => item.course.name === filters.courseName &&
          item.campus.city === filters.campusCity)
      setFilterSelectCourses(selectBy)
    }
    else if(filters.campusCity) {
      const selectBy = selectCourses
        .filter(item => item.campus.city === filters.campusCity)
      setFilterSelectCourses(selectBy)
    }
    else if(filters.courseName) {
      const selectBy = selectCourses
        .filter(item => item.course.name === filters.courseName)
      setFilterSelectCourses(selectBy)
    }
  }, [filters, selectCourses])

  const handleChecked = row => {
    const addCourse = [
      ...checkedCourses,
      row
    ]
    const removeCourse = checkedCourses
      .filter(item => item.id !== row.id)

    checkedCourses.includes(row)
    ? setCheckedCourses(removeCourse)
    : setCheckedCourses(addCourse)
  }

  const saveGrants = () => {
    const addFavorites = [
      ...favoriteCourses,
      ...checkedCourses
    ]
    const removeCourses = selectCourses
      .filter(item => !checkedCourses.includes(item))

    setFavoriteCourses(addFavorites)
    setCheckedCourses([])
    setModal(false)
    setSelectCourses(removeCourses)
  }

  return (
    <Modal
      title="Adicionar bolsa"
      subtitle="Filtre e adicione as bolsas de seu interesse"
      show={modal}
      hideModal={() => setModal(false)}
      actions={
        <>
          <Button handleClick={() => setModal(false)}>
            Cancelar
          </Button>
          <Button
            type={checkedCourses.length === 0 ? 'disabled' : 'secondary'}
            handleClick={() => saveGrants()}
          >
            Adicionar bolsa(s)
          </Button>
        </>
      }
    >
      <FiltersContext.Provider
        value={{
          filters,
          setFilters
        }}
      >
        <Filters
          courses={selectCourses}
        />
      </FiltersContext.Provider>
      <div className={styles.tableHeader}>
        <span className={styles.tableTitle}>
          Resultados:
        </span>
        <span className={styles.tableOrder}>
          Ordernar por&nbsp;
          <strong>
            Nome da Faculdade&nbsp;
            <FontAwesomeIcon icon={['fas', 'chevron-down']} size="1x" />
          </strong>
        </span>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <tbody>
            {selectCourses &&
              filterSelectCourses.map(item => (
                <TableRow
                  key={item.id}
                  id={item.id}
                  handleChange={() => handleChecked(item)}
                  courseName={item.course.name}
                  courseLevel={item.course.level}
                  discountPercentage={item.discount_percentage}
                  priceWithDiscount={item.price_with_discount}
                  universityLogo={item.university.logo_url}
                  universityName={item.university.name}
                />
              ))
            }
          </tbody>
        </table>
      </div>
    </Modal>
  )
}

export default AddGrants

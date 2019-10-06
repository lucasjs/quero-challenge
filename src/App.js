import React, { createContext, useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faComments,
  faEnvelope,
  faHeart,
  faUserCircle
} from '@fortawesome/free-regular-svg-icons'
import {
  faChevronDown,
  faInfo,
  faPlusCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

import Header from './containers/Header'
import Grants from './containers/Grants'
import AddGrants from './containers/AddGrants'
import Footer from './containers/Footer'

import styles from './App.css'

export const CoursesContext = createContext()

const App = () => {
  const [name] = useState('Nome Sobrenome')
  const [courses, setCourses] = useState([])
  const [favoriteCourses, setFavoriteCourses] = useState([])
  const [selectCourses, setSelectCourses] = useState([])
  const [modal, setModal] = useState(false)

  useEffect(() => {
    fetch('https://testapi.io/api/redealumni/scholarships')
      .then(res => res.json())
      .then(res => res.map((item, index) => {
        item.id = index + 1
        return item
      }))
      .then(res => setCourses(res))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    const bodyTag = document.getElementsByTagName('body')[0]
    modal
    ? bodyTag.classList.add(styles['scrollLock'])
    : bodyTag.classList.remove(styles['scrollLock'])
  }, [modal])

  return (
    <div className={styles.App}>
      <Header name={name} />
      <main>
        <CoursesContext.Provider
          value={{
            courses,
            favoriteCourses,
            setFavoriteCourses,
            selectCourses,
            setSelectCourses,
            modal,
            setModal
          }}
        >
          <Grants />
          <AddGrants />
        </CoursesContext.Provider>
      </main>
      <Footer />
    </div>
  )
}

library.add(
  faChevronDown,
  faComments,
  faEnvelope,
  faHeart,
  faInfo,
  faPlusCircle,
  faTimes,
  faUserCircle,
  faWhatsapp
)

export default hot(App)

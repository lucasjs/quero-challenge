import React, { useContext, useEffect, useState } from 'react'
import {
  ascend,
  path,
  sortWith
} from 'ramda'

import Card, { AddCard } from 'components/Card'
import SegmentedControls from 'components/SegmentedControls'
import { CoursesContext } from 'App'

import styles from './Grants.css'

const links = [
  {
    id: 1,
    name: 'Home'
  },
  {
    id: 2,
    name: 'Minha conta'
  },
  {
    id: 3,
    name: 'Bolsas favoritas',
    active: true
  }
]

const semestersOptions = [
  {
    id: 1,
    value: '',
    title: 'Todos os semestres'
  },
  {
    id: 2,
    value: '2019.2',
    title: '2° semestre de 2019'
  },
  {
    id: 3,
    value: '2020.1',
    title: '1° semestre de 2020'
  }
]

const Grants = () => {
  const [semester, setSemester] = useState('')

  const {
    selectCourses,
    setSelectCourses,
    favoriteCourses,
    setFavoriteCourses,
    setModal
  } = useContext(CoursesContext)

  useEffect(() => {
    setFavoriteCourses(favoriteCourses)
  }, [favoriteCourses])

  const removeCard = card => {
    const filterFavorites = favoriteCourses.filter(item => item.id !== card.id)
    setFavoriteCourses(filterFavorites)

    const putBackCard = [
      ...selectCourses,
      card
    ]
    const sortList = sortWith([
      ascend(path(['university', 'name'])),
      ascend(path(['course', 'name']))
    ])
    const newList = sortList(putBackCard)
    setSelectCourses(newList)
  }

  const handleSemester = item => {
    setSemester(item)
  }

  const filterFavoriteCourses = semester
    ? favoriteCourses.filter(item => item.enrollment_semester === semester)
    : favoriteCourses

  return (
    <section className={styles.grants}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <nav className={styles.breadcrumb}>
              <ul>
                {links.map(item => (
                  <li key={item.id}>
                    {item.active
                      ? <span styles={styles.active}>{item.name}</span>
                      : <a href="#">{item.name}</a>
                    }
                  </li>
                ))}
              </ul>
          </nav>
          <h2 className={styles.title}>
            Bolsas favoritas
          </h2>
          <p className={styles.disclaimer}>
            Adicione bolsas de cursos e faculdades do seu interesse
            e receba atualizações com as melhores ofertas disponíveis.
          </p>
          <div className={styles.filters}>
            <SegmentedControls
              name="switch-controls"
              options={semestersOptions}
              handleChange={(value) => handleSemester(value)}
              value={semester}
            />
          </div>
        </div>

        <div className={styles.cards}>
          <AddCard
            title="Adicionar bolsa"
            subtitle="Clique aqui para adicionar bolsas de cursos do seu interesse"
            addCourse={() => setModal(true)}
          />
          {favoriteCourses &&
            filterFavoriteCourses.map(item => (
              <Card
                key={item.id}
                id={item.id}
                courseKind={item.course.kind}
                courseName={item.course.name}
                courseShift={item.course.shift}
                enabled={item.enabled}
                fullPrice={item.full_price}
                priceWithDiscount={item.price_with_discount}
                startDate={item.start_date}
                universityLogo={item.university.logo_url}
                universityName={item.university.name}
                universityScore={item.university.score}
                removeCard={() => removeCard(item)}
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Grants

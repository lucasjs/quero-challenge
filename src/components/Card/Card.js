import React from 'react'
import PropTypes from 'prop-types'

import Button from 'components/Button'
import Rating from 'components/Rating'

import styles from './Card.css'

const Card = ({
  courseKind,
  courseName,
  courseShift,
  enabled,
  fullPrice,
  id,
  priceWithDiscount,
  removeCard,
  startDate,
  universityLogo,
  universityName,
  universityScore
}) => {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.section}>
        <img
          src={universityLogo}
          alt={`Logo ${universityName}`}
          className={styles.universityLogo}
        />
        <span className={styles.universityName}>
          {universityName}
        </span>
        <span className={styles.courseName}>
          {courseName}
        </span>
        <Rating value={universityScore} />
      </div>
      <div className={styles.section}>
        <span className={styles.courseInfo}>
          {courseKind} • {courseShift}
        </span>
        <span className={styles.startDate}>
          Início das aulas em: {startDate}
        </span>
      </div>
      <div className={styles.section}>
        {enabled
          ? <>
              <span className={styles.bottomTitle}>
                Mensalidade com o Quero Bolsa:
              </span>
              <span className={styles.fullPrice}>
                {fullPrice.toLocaleString('pt-br', {
                  style: 'currency', currency: 'BRL'
                })}
              </span>
              <span className={styles.priceDiscount}>
                <strong>
                  {priceWithDiscount.toLocaleString('pt-br', {
                    style: 'currency', currency: 'BRL'
                  })}
                </strong> /mês
              </span>
              <div>
                <Button handleClick={removeCard}>
                  Excluir
                </Button>
                <Button type="secondary" handleClick={() => null}>
                  Ver oferta
                </Button>
              </div>
            </>
          : <>
              <span className={styles.bottomTitle}>
                Bolsa indisponível.
              </span>
              <span className={styles.bottomText}>
                Entre em contato com nosso atendimento para saber mais.
              </span>
              <div>
                <Button handleClick={removeCard}>
                  Excluir
                </Button>
                <Button type="disabled">
                  Indisponível
                </Button>
              </div>
            </>
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  id: null
}

Card.propTypes = {
  courseKind: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  courseShift: PropTypes.string.isRequired,
  enabled: PropTypes.bool.isRequired,
  fullPrice: PropTypes.number.isRequired,
  id: PropTypes.number,
  priceWithDiscount: PropTypes.number.isRequired,
  removeCard: PropTypes.func.isRequired,
  startDate: PropTypes.string.isRequired,
  universityLogo: PropTypes.string.isRequired,
  universityName: PropTypes.string.isRequired,
  universityScore: PropTypes.number.isRequired
}

export default Card

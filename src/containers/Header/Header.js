import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import logo from './logo-quero.png'
import styles from './Header.css'

const Header = ({
  name
}) => {
  const [links] = useState([
    {
      id: 1,
      name: 'Minha conta'
    },
    {
      id: 2,
      name: 'Pré-matrículas'
    },
    {
      id: 3,
      name: 'Bolsas favoritas',
      active: true
    }
  ])

  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={`container ${styles.topItems}`}>
          <div className={styles.disclaimer}>
            <div className={styles.disclaimerInfo}>
              <FontAwesomeIcon
                icon={['fas', 'info']}
                size="2x"
                className={styles.infoIcon}
              />
              <span className={styles.title}>
                Como funciona
              </span>
            </div>
            <div className={styles.disclaimerContact}>
              <FontAwesomeIcon
                icon={['fab', 'whatsapp']}
                size="2x"
                className={styles.whatsappIcon}
              />
              <div className={styles.disclaimerContactTexts}>
                <span className={styles.title}>
                  0800 123 2222
                </span>
                <span className={styles.subtitle}>
                  Envie mensagem ou ligue
                </span>
              </div>
            </div>
          </div>
          <div className={styles.logo}>
            <img src={logo} alt="Logo Quero Bolsas" />
          </div>
          <div className={styles.userInfo}>
            <span className={styles.title}>{name}</span>
            <FontAwesomeIcon
              icon={['far', 'user-circle']}
              size="2x"
              className={styles.userIcon}
            />
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={`${styles.navContainer} container`}>
          <ul>
            {links.map(item => (
              <li key={item.id}>
                <a href="#" className={item.active ? styles.active : ''}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  name: PropTypes.string.isRequired
}

export default Header

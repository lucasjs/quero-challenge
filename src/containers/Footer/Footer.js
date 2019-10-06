import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Footer.css'

const links = [
  {
    id: 1,
    iconType: 'fab',
    iconName: 'whatsapp',
    title: '0800 123 2222',
    subtitle: 'Seg - Sex 8h-22h'
  },
  {
    id: 2,
    iconType: 'far',
    iconName: 'comments',
    title: 'Chat ao vivo',
    subtitle: 'Seg - Sex 8h-22h'
  },
  {
    id: 3,
    iconType: 'far',
    iconName: 'envelope',
    title: 'Mande um e-mail',
    subtitle: 'Respondemos rapidinho'
  },
  {
    id: 4,
    iconType: 'fas',
    iconName: 'info',
    title: 'Central de ajuda',
    subtitle: 'Encontre todas as respostas'
  }
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.sac}>
        <div className="container">
          <ul className={styles.sacList}>
            {links && links.map(item => (
              <li key={item.id} className={styles.sacItem}>
                <span>
                  <FontAwesomeIcon
                    icon={[`${item.iconType}`, `${item.iconName}`]}
                    size="3x"
                  />
                </span>
                <div className={styles.sacItemText}>
                  <span className={styles.sacItemTitle}>
                    {item.title}
                  </span>
                  <span className={styles.sacItemSubtitle}>
                    {item.subtitle}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className={styles.bottom}>
        <div className="container">
          <span className={styles.disclaimer}>
            Feito com <FontAwesomeIcon icon={['far', 'heart']} /> pela Quero Educação
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Modal.css'

const Modal = ({
  actions,
  children,
  hideModal,
  show,
  subtitle,
  title
}) => {
  return (
    <div
      className={`${styles.modalOverlay} ${show ? styles.show : null}`}
      role="dialog"
      tabIndex="-1"
      aria-modal={show}
      aria-hidden={!show ? true : null}
    >
      <div
        className={styles.modal}
        role="document"
      >
        <button
          aria-label="fechar"
          className={styles.close}
          onClick={() => hideModal()}
        >
          <FontAwesomeIcon icon={['fas', 'times']} size="lg" />
        </button>
        <div className={styles.content}>
          <h3 className={styles.title}>
            {title}
          </h3>
          <h4 className={styles.subtitle}>
            {subtitle}
          </h4>
          <div className={styles.children}>
            {children}
          </div>
        </div>
        <div className={styles.actions}>
          {actions}
        </div>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  show: false,
  subtitle: null
}

Modal.propTypes = {
  actions: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  hideModal: PropTypes.func.isRequired,
  show: PropTypes.bool,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default Modal

import React from 'react'
import PropTypes from 'prop-types'
import styles from './UploadProgressBar.module.css'

export default function UploadProgressBar(props) {
  const {progress} = props

  return (
    <div className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.barContainer}>
          <div className={styles.bar} style={{width: `${progress}%`}} />
        </div>
      </div>
    </div>
  )
}

UploadProgressBar.propTypes = {
  progress: PropTypes.number
}

UploadProgressBar.defaultProps = {
  progress: 0
}

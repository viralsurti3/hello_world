import React from 'react'
import styles from './MyStyle.module.css'

function Stylesheet(props) {

    
  return (
    <div className={ props.primary ? styles.primary : '' }  >Stylesheet</div>
  )
}

export default Stylesheet
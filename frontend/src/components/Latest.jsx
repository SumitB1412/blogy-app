import React from 'react'
import styles from "../styles/latest.module.css";
import { Blog } from './Blog';

export const Latest = () => {
  return (
    <div className={styles.parent}>
        <h2>Latest Posts</h2>
        <div className={styles.line}><div></div></div>
        <div className={styles.boxes}>
            <Blog />
        </div>
    </div>
  )
}

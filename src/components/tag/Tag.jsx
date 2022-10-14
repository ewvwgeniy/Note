import React from 'react';
import styles from '../styles/Tags.module.css'

const Tag = ({title, onClick}) => {
  return (
    <p className={styles.tag} onClick={() => onClick(title)}>
      {title}
    </p>
  );
};

export default Tag;
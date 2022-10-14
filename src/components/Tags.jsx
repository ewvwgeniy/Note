import React from "react";
import Tag from "./tag/Tag";
import styles from './styles/Tags.module.css'

const Tags = ({tags, onClick, tagsTitle}) => {
  return (
    <div className={styles.tags}>
      <p className={styles.tags_title}>{tagsTitle}</p>
      {
        tags.map(tag => <Tag title={tag} key={tag} onClick={onClick}/>)
      }
    </div>
  );
};

export default Tags;
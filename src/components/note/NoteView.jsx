import React from 'react';
import styles from "../styles/Note.module.css";
import Tags from "../Tags";
import {useDispatch} from "react-redux";
import {addFilterTagActionCreator} from "../../store/noteReducer";

const NoteView = ({note}) => {
  const dispatch = useDispatch()
  const onTagClick = (tag) => {
    dispatch(addFilterTagActionCreator(tag))
  }

  return (
    <>
      <h2 className={styles.note_title}>{note.title}</h2>
      <p className={styles.note_text}>{note.note}</p>
      <Tags tags={note.tags} tagsTitle="Tags:" onClick={onTagClick}/>
    </>
  );
};

export default NoteView;
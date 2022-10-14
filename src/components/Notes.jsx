import React from 'react'
import Note from "./note/Note"
import styles from './styles/Notes.module.css'
import {useSelector} from "react-redux";

const Notes = () => {
  const notesToShow = useSelector(state => state.notesToShow)

  return (
    <div className={styles.notes}>
      {
        notesToShow.length ?
          notesToShow.map(e =>
            <Note note={e} key={e.id}/>)
          :
          <p>You don't have notes, but you can create a new one :)</p>
      }
    </div>
  )
}

export default Notes
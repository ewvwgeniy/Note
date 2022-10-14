import React, {useState} from 'react'
import styles from '../styles/Note.module.css'
import NoteView from "./NoteView";
import NoteForm from "./NoteForm";
import {useDispatch} from "react-redux";
import {deleteNoteActionCreator, editNoteActionCreator} from "../../store/noteReducer";

const Note = ({note}) => {
  const [isEditing, setisEditing] = useState(false)
  const dispatch = useDispatch()

  const onEdit = () => {
    setisEditing(true)
  }

  const onDelete = () => {
    dispatch(deleteNoteActionCreator(note.id))
  }
  const onSave = (newNote) => {
    dispatch(editNoteActionCreator({...note, ...newNote}))
    setisEditing(false)
  }
  const onNoteSaveCancel = () => {
    setisEditing(false)
  }

  return (
    <div className={styles.note}>
      <div className={styles.note_info}>
        {
          isEditing ?
            <NoteForm title="Edit your note" noteTextValue={note.note} noteTitle={note.title}
                      onNoteSaveCancel={onNoteSaveCancel} onNoteSave={onSave}/>
            :
            <NoteView note={note}/>
        }
      </div>

      <div className={styles.note_btn_grp}>
        {!isEditing &&
          <button onClick={onEdit} className={styles.btn_edit}>Edit</button>}
        <button onClick={onDelete} className={styles.btn_delete}>Delete</button>
      </div>
    </div>
  );
};

export default Note
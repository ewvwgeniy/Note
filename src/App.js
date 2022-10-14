import styles from './App.module.css';
import Notes from "./components/Notes";
import React, {useState} from "react";
import NoteForm from "./components/note/NoteForm";
import {useDispatch} from "react-redux";
import {createNoteActionCreator} from "./store/noteReducer";
import TagFilter from "./components/tag/TagFilter";

const App = () => {
  const [creatingMode, setCreatingMode] = useState(false)
  const dispatch = useDispatch()


  const onNoteCreateClick = () => {
      setCreatingMode(true)
  }
  const onNoteCreating = (note) => {
    dispatch(createNoteActionCreator(note))
    setCreatingMode(false)
  }
  const onNoteSaveCancel = () => {
    setCreatingMode(false)
  }


  return (
    <div className={styles.App}>
      <h1>Notes</h1>
      <p style={{color: "green"}}>You can add tag to your note by adding # before it</p>
      <TagFilter />
      {creatingMode ?
        <div className={styles.note_create}>
          <NoteForm onNoteSave={onNoteCreating} onNoteSaveCancel={onNoteSaveCancel} title="Type new note here"/>
        </div>
        :
        <button onClick={onNoteCreateClick}>Create new note</button>
      }
      <Notes/>
    </div>
  );
}

export default App;
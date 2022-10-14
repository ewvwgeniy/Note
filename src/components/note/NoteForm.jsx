import styles from '../styles/NoteForm.module.css'
import React, {useState} from "react";
import Tags from "../Tags";
import {getTagsFromText} from "../../extensions/functions";
import {useDispatch} from "react-redux";
import {addFilterTagActionCreator} from "../../store/noteReducer";

const NoteForm = ({onNoteSave, onNoteSaveCancel, noteTitle = "", noteTextValue = "", title = "Type new note here"}) => {
  const [titleEmpty, setTitleEmpty] = useState(false)
  const [noteEmpty, setNoteEmpty] = useState(false)
  const [titleText, setTitleText] = useState(noteTitle)
  const [noteText, setNoteText] = useState(noteTextValue)
  const [tags, setTags] = useState(getTagsFromText(noteTextValue))

  const dispatch = useDispatch()
  const onTagClick = (tag) => {
    dispatch(addFilterTagActionCreator(tag))
  }

  const onSave = () => {
    if (!titleText.trim()) {
      setTitleEmpty(true)
    }
    if (!noteText.trim()) {
      setNoteEmpty(true)
    }
    if (titleText.trim() && noteText.trim()) {
      onNoteSave({title: titleText, note: noteText, tags: tags})
    }
  }

  const onTitleChange = (e) => {
    setTitleEmpty(false)
    setTitleText(e.target.value)
  }
  const onNoteChange = (e) => {
    setNoteEmpty(false)
    setNoteText(e.target.value)
    setTags(getTagsFromText(e.target.value))
  }
  const onCancel = () => {
    onNoteSaveCancel()
  }

  return (
    <div className={styles.create_note}>
      <h3>{title}</h3>

      <div className={styles.fields_div}>
        <label htmlFor="title" className={styles.title_label}>Title:</label>
        <input value={titleText} onChange={onTitleChange} type="text" id="title" placeholder="Type your note title here..."/>
        {titleEmpty && <p className={styles.error_message}>Title shouldn't be empty</p>}

        <label htmlFor="note" className={styles.note_label}>Note:</label>
        <textarea value={noteText} onChange={onNoteChange} id="note" className={styles.note_text} placeholder="Type your note here..."/>
        {noteEmpty && <p className={styles.error_message}>Note shouldn't be empty</p>}

        <Tags tags={tags} tagsTitle="Tags:" onClick={onTagClick}/>
      </div>

      <div className={styles.button_group}>
        <button onClick={onSave} className={styles.btn_save}>Save</button>
        <button onClick={onCancel} className={styles.btn_cancel}>Cancel</button>
      </div>
    </div>
  );
};

export default NoteForm
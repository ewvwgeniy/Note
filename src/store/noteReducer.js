import {getFilteredNotes} from "../extensions/functions";

const DELETE_NOTE = "DELETE_NOTE"
const CREATE_NOTE = "CREATE_NOTE"
const EDIT_NOTE = "EDIT_NOTE"
const ADD_FILTER_TAG = "ADD_FILTER_TAG"
const REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG"

const defaultNote = {title: "Task", id: 0, tags: ['shop"'],
  note:
    "You need to develop a single-page application by using\n" +
    "React/Redux javascript frameworks: a text editor for notes\n" +
    "with twitter-style tags support.\n" +
    "\n" +
    "Main application features:\n" +
    "Create, edit and delete notes. Also, filtering notes by tags.\n" +
    "While adding/editing note, the user should have an option to\n" +
    "create a tag using # symbol.\n" +
    "Example:\n" +
    "User enters texts \"I wanna go #shop\" and during or at the end\n" +
    "of the input appropriate tag should be created and displayed.\n" +
    "You can use client or server-side data storage of your choice.\n" +
    "UI design is not important.\n" +
    "The project should be uploaded to GitHub/GitLab/Bitbucket.\n" +
    "\n" +
    "Will be a plus:\n" +
    "test code coverage\n" +
    "gulp/browserify for project building"}
const defaultState = {notes: [defaultNote],
  notesToShow: [defaultNote],
  tags: ['shop"'],
  filterTags: []
}

export const noteReducer = (state = defaultState, action) => {
    switch (action.type) {
      case CREATE_NOTE: {
        const maxId = Math.max(...state.notes.map(e => e.id), 0)
        const newTags = [...new Set(state.tags.concat(action.payload.tags))]
        const newNotes = [{...action.payload, id: maxId + 1}, ...state.notes]
        return {...state, tags: newTags, notes: newNotes, notesToShow: newNotes, filterTags: []}
      }
      case EDIT_NOTE: {
        const editedIndex = state.notes.findIndex(e => e.id === action.payload.id)
        const newNotes = [...state.notes]
        newNotes[editedIndex] = action.payload
        const newTags = [...new Set(newNotes.flatMap(note => note.tags))]
        const newFilterTags = state.filterTags.filter(tag => newTags.includes(tag))
        const newFilteredNotes = getFilteredNotes(newNotes, newFilterTags)
        return {...state, tags: newTags, notes: newNotes, filterTags: newFilterTags, notesToShow: newFilteredNotes}
      }
      case DELETE_NOTE: {
        const newNotes = [...state.notes.filter(e => e.id !== action.payload)]
        const newTags = [...new Set(newNotes.flatMap(note => note.tags))]
        const newFilterTags = state.filterTags.filter(tag => newTags.includes(tag))
        const newFilteredNotes = getFilteredNotes(newNotes, newFilterTags)
        return {...state, tags: newTags, filterTags: newFilterTags, notes: newNotes, notesToShow: newFilteredNotes}
      }
      case ADD_FILTER_TAG: {
        const newFilterTags = [...new Set(state.filterTags.concat([action.payload]))]
        const newFilteredNotes = getFilteredNotes(state.notes, newFilterTags)
        return {...state, filterTags: newFilterTags, notesToShow: newFilteredNotes}
      }
      case REMOVE_FILTER_TAG: {
        const newFilterTags = [...state.filterTags.filter(e => e !== action.payload)]
        const newFilteredNotes = getFilteredNotes(state.notes, newFilterTags)
        return {...state, filterTags: newFilterTags, notesToShow: newFilteredNotes}
      }
      default:
        return state
    }
}

export const createNoteActionCreator = (note) => ({type: CREATE_NOTE, payload: note})
export const editNoteActionCreator = (note) => ({type: EDIT_NOTE, payload: note})
export const deleteNoteActionCreator = (id) => ({type: DELETE_NOTE, payload: id})
export const addFilterTagActionCreator = (tag) => ({type: ADD_FILTER_TAG, payload: tag})
export const removeFilterTagActionCreator = (tag) => ({type: REMOVE_FILTER_TAG, payload: tag})
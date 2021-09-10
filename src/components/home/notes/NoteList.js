import React from 'react'
import Note from './Note'
import './NoteList.css'


const NoteList = ({notes}) => {
    return (
        <div className="notelist">
            {notes && notes.map(note=> <Note note={note} key={note.id} />)}
        </div>
    )
}

export default NoteList

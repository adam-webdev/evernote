import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteNote,favoriteStatus } from '../../../store/actions/noteAction'
import './Note.css'
import moment from 'moment'
import { Link } from 'react-router-dom'

const Note = ({note}) => {
    const dispatch = useDispatch()
    const hanleDelete = () => {
        dispatch(deleteNote(note))
    }
    const handleFavorite = () => {
        dispatch(favoriteStatus(note))
    }

    const handleEditNote = () => {
        dispatch({type:'EDIT_NOTE',payload:note})
    }

    const favoriteIcon = note.favorite? "favorite" : "favorite_border"
    return (
        <div className="note white card">
           <div className="right-align">
               <i className="material-icons red-text" style={{cursor:"pointer",marginRight:"4px"}} onClick={handleFavorite}>{favoriteIcon}</i>
               <i className="material-icons" style={{cursor:"pointer"}} onClick={hanleDelete}>delete</i>
               
            </div> 
            <Link to={"note/"+ note.id }>
               <h5 className="black-text">{note.title}</h5>
            </Link>
               <p className="truncate">{note.content}</p>
               <p className="grey-text">{moment(note.createdAt.toDate()).fromNow()}</p>
               <div className="right-align">
                   <Link to={`/edit-note/${note.id}`}>
                        <i className="material-icons black-text" style={{cursor:"pointer"}} onClick={handleEditNote}>edit</i>
                   </Link>
                </div>
        </div>
    )
}

export default Note

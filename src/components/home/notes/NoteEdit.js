import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import useInput from '../../../custom-hooks/useInput';
import { updateNote } from '../../../store/actions/noteAction';

const NoteEdit = () => {
    const note = useSelector((state)=>state.note)
    console.log("object note : ",note);
    const [title,bindTitle,resetTitle] = useInput(note.title)
    const [content,bindContent,resetContent] = useInput(note.content)
    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateNote({id:note.id,title,content}))
        resetTitle()
        resetContent()
        history.push('/')
    }
    return (
        <div className="section container">
            <form onSubmit={handleSubmit} className="white" style={{padding:"10px 14px"}}>
                <h6 className="grey-text text-darken-3 center" style={{marginBottom:"30px"}}>Update Note</h6>
                <div className="input-field">
                    <input id="note-title" type="text" className="validate" {...bindTitle} />
                    <label className="active" htmlFor="note-title">Title...</label>
                </div>
                <div className="input-field">
                <textarea id="note-content" style={{height:"150px"}} className="materialize-textarea" {...bindContent} />     
                <label className="active" htmlFor="note-content" >Content...</label>
                </div>
                <button className="btn blue">Update</button>
            </form>
        </div>
    )
}

export default NoteEdit
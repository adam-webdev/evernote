import React from 'react'
import useInput from '../../custom-hooks/useInput'
import { addNote } from '../../store/actions/noteAction'
import { useDispatch } from 'react-redux'
const Form = () => {
    const [title,bindTitle,resetTitle] = useInput()
    const [content,bindContent,resetContent] = useInput()
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addNote({title,content}))
        resetTitle()
        resetContent()
    }
    return (
        <div className="section">
            <form onSubmit={handleSubmit} className="white" style={{padding:"10px 14px"}}>
                <h6 className="grey-text text-darken-3">New Note</h6>
                <div className="input-field">
                    <input id="note-title" type="text" className="validate" {...bindTitle} />
                    <label htmlFor="note-title">Title...</label>
                </div>
                <div className="input-field">
                <textarea id="note-content" className="materialize-textarea" {...bindContent} />     
                <label htmlFor="note-content">Content...</label>
                </div>
                <button className="btn blue">Add</button>
            </form>
        </div>
    )
}

export default Form

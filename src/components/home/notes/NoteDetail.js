import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect,isEmpty } from 'react-redux-firebase'
import moment from 'moment'

const NoteDetail = (props) => {
    const id = props.match.params.id
    useFirestoreConnect([{collection:'evernote',doc:id}])
    const note = useSelector(
        ({firestore:{data}}) =>  data.evernote && data.evernote[id] 
    )
    if(!isEmpty){
        return <h5 className="container">Ooops ... Note is Empty.</h5>
    }
    return (

        <div className="container" style={{marginTop:"80px"}}>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">{note?.title}</span>
                    <p>{note?.content}</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                   <div>{moment(note?.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
    )
}

export default NoteDetail

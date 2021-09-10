import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import Form from './form'
import NoteList from './notes/NoteList'


const Home = () => {
    useFirestoreConnect([{collection:'evernote',orderBy:['createdAt','desc']}])
    const notes = useSelector((state)=>state.firestore.ordered.evernote)
    return (
        <div className="container">
            <div className="row center-align">
                <div className="col s7 card" style={{marginTop:"80px"}}><Form /></div>
                <div className="col s5"><NoteList notes={notes} /></div>
            </div>
        </div>
    )
}

export default Home

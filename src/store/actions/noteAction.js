export const addNote = (note) => {
    return (dispatch,getState,{getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('evernote')
        .add({
            ...note,
            favorite: false,
            createdAt: new Date()
        })
        .then(()=>{
            console.log("add note successfully")
        })
        .catch(err => {
            console.log("erorr" ,err)
        })
        
    }
}
export const deleteNote = (note) => {
    return (dispatch,getState,{getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('evernote')
        .doc(note.id).delete()
        .then(()=>{
            console.log("delete note successfully")
        })
        .catch(err => {
            console.log("erorr" ,err)
        })
        
    }
}
export const favoriteStatus = (note) => {
    return (dispatch,getState,{getFirestore}) => {
        const favStat = !note.favorite
        const firestore = getFirestore()
        firestore.collection('evernote')
        .doc(note.id).update({
            favorite:favStat
        })
        .then(()=>{
                console.log("add favorites successfully")
        })
        .catch(err => {
            console.log("erorr" ,err)
        })
        
    }
}
export const updateNote = (note) => {
    return (dispatch,getState,{getFirestore}) => {
        const firestore = getFirestore()
        firestore.collection('evernote')
        .doc(note.id).update({
            title: note.title,
            content: note.content
        })
        .then(()=>{
                console.log("Update note successfully")
        })
        .catch(err => {
            console.log("erorr" ,err)
        })
        
    }
}
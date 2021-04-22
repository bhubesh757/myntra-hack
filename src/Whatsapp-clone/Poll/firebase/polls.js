import { db } from "../../../firebase";


export const createPoll = (poll)=>{
    const docRef = db.doc(`/polls/${poll.id}`);
    return docRef.set(poll);
}

export const updatePoll = (poll)=>{
    const docRef = db.doc(`/polls/${poll.id}`);
    return docRef.update(poll);
}
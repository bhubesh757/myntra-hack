import React, { useState } from 'react'

import './CheckoutProduct.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import { db } from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from '../firebase'
import { useStateValue } from '../StateProvider';
// context api
// import {useStateValue} from '/home/bhubesh/react-clone-two/src/StateProvider.js'
function CheckoutProduct({id , image , title , price , rating }) {

    const {roomId} = useParams();
    const [input, setinput] = useState('')
    const [{user} , dispatch] = useStateValue();

    // share button
    const shareChat = () => {
        db.collection('rooms').doc(roomId).collection('cartitems')
        .add({
            name: user.displayName,
            message : [input  ,image, title , price , rating],
            // imageUrl : url,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setinput('');

    } 
    return (
        <div className = 'CheckoutProduct'>
            {/* img */}
            {/* title */}
            <img className = 'checkoutproduct__image' src = {image}>
            </img>

            <div className="checkoutproduct__info">
                <p className = 'checkoutproduct__title'>
                    {title}
                </p>
                

                <p className = 'checkoutproduct__price'>
                <small>₹</small>
                     <strong>{price}</strong>
                </p>
                <div className = 'checkoutproduct__input'>
                <input type="checkbox" />
                </div>
                <FavoriteBorderIcon></FavoriteBorderIcon>
                <div className="checkoutproduct__rating">
                    {Array(rating).fill().map((_,i) => (
                    <p>✩</p>
                    ) )}
                </div>
                <button className = 'checkoutproduct__button' onClick = {shareChat}>
                    <ShareIcon color="secondary" fontSize="medium" />
                </button>
            </div>
        </div>
    )
}

export default CheckoutProduct
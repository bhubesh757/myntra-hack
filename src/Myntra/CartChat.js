import React from 'react'

import './CartChat.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function CartChat({cart}) {
    return (
        <div className = 'cartchat'>
            {/* image */}
            <div className = 'cartchat__image' >
                {/* <img  src = 'https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg'></img> */}
                <img  src = {cart.message}></img>
            </div>

            {/* info */}
            <div className = 'cartchat__info'>
                <h4 className = 'cartchat__title'>
                {/* Ethnic Print Kurta Set */}
                {cart.title}
                </h4>
                {/* <p> sub title</p> */}

                {/* price */}

                <div  className = 'cartchat__price'>
                <p>
    <small>₹ {''}</small>

                     {/* <strong>999</strong> */}
                     <strong>{cart.price}</strong>
                </p>

                <span>26%</span>
                <FavoriteBorderIcon></FavoriteBorderIcon>
                </div>
                

                
                {/* rating */}
                <div className = 'cartchart__rating'>
                4.3
                <span>(745)</span>
                </div>
            </div>

            {/* time send */}
        </div>

    )
}

export default CartChat

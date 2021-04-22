import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, Dialog, IconButton, makeStyles } from '@material-ui/core';
import React , {useEffect , useState} from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import {useParams} from 'react-router-dom'

// icons

import AttachmentIcon from '@material-ui/icons/Attachment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { InsertEmoticon, SearchOutlined } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';
import './Chat.css'
import { db , storage } from '../firebase';
import firebase from '../firebase'
import { useStateValue } from '../StateProvider';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import styled from 'styled-components';
// Flipmove

import FlipMove from 'react-flip-move';
import Polls from './Polls';
import { Modal } from './Modal';
import { GlobalStyle } from './globalStyles';
import DialogModal from './DialogModal';
import SpeeDial from './SpeeDial';
import { CardMedia } from 'material-ui';
import Typography from 'material-ui/styles/typography';
import ShareCart from './ShareCart';
// import CartChat from '../Myntra/CartChat';
import '../Myntra/CartChat.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import Poll from './Poll/Poll';
// import imageUpload from './imageUpload';


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const useStyles = makeStyles({
    root: {
      maxWidth: 400
    },
    media: {
      height: 380
    }
  });


function Chat({}) {
    const classes = useStyles();
    const [seed, setseed] = useState('')
    const [input, setinput] = useState('')

    const {roomId} = useParams();
    const [roomName, setroomName] = useState('')

    const [messages, setmessages] = useState([])
    const [cartItem, setcartItem] = useState([]);
    // images
    const [images, setimages] = useState([]);

    const [{user} , dispatch] = useStateValue();



    const [image, setimage] = useState(null);
    // const [text, settext] = useState('');
    const [progress, setprogress] = useState(0)

    useEffect(() => {
      if (roomId) {
          db.collection('rooms').doc(roomId).
          onSnapshot(snapshot => (
              setroomName (snapshot.data().name)
          ))

          
          db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp' , 'asc')
          .onSnapshot(snapshot => (
              setmessages (snapshot.docs.map(
                  doc => doc.data()
              ))
          ))


          db.collection('rooms').doc(roomId).collection('cartitems').orderBy('timestamp' , 'asc')
          .onSnapshot(snapshot => (
            setcartItem (snapshot.docs.map(
                  doc => doc.data()
              ))
          ))


          
      }
  }, [roomId])

  useEffect(() => {
    let unsubscribe ;

    if (roomId) {
        unsubscribe = db.collection('rooms')
        .doc(roomId)
        .collection('images')
        .orderBy('timestamp' , 'desc')
        .onSnapshot((snapshot) => {
            setimages(snapshot.docs.map((doc) => doc.data()))
        })
    }

    return () => {
        // unsubscribe ();
    };

}, [roomId])
  

    useEffect(() => {
        setseed( Math.floor(Math.random() * 5000));
        
     },[roomId])

    //  sending a message
    const sentMessage = (e) => {
      e.preventDefault();

      console.log('boom typed' , input);
      

      db.collection('rooms').doc(roomId).collection('messages')
      .add({
          message : input ,
          name : user.displayName,
          timestamp : firebase.firestore.FieldValue
          .serverTimestamp(),
      })

      setinput('');
  }

    // AddImage


    // Adding image using the onchange

    const onChange = (e) => {

    }

    // showOptions

    // const openModal = () => {
    //     setShowModal(prev => !prev);
    //   };
    

    // handlechange

    const handleChange = (e) => {
        if (e.target.files[0]){
            setimage(e.target.files[0])
        }
    };

    const handleUpload = () => {
        const uploadTask = storage.ref(`images/${image.name }`).put(image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // progress function...

                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                )

                setprogress(progress);
            },
            (error) => {
             console.log(error);
             alert(error.message);
            },
            
            () => {
                // complete function
                storage 
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then(url => {
                    // post image to db

                    db.collection('rooms').doc(roomId).collection('images')
                    .add({
                        timestamp : firebase.firestore.FieldValue.serverTimestamp(),
                        name : user.displayName,
                        imageUrl : url,
                        // username : username,
                    });
                    
                    setprogress(0);
                    // settext('');
                    setimage(null);
                    // setavatar(null);
                })
            }
        )
    }
    return (
        <div className = 'chat'>
            {/* <h1> Boom i am Chat</h1> */}

            <div className="chat__header">
                <Avatar src = {`https://avatars.dicebear.com/api/bottts/${seed}.svg`} ></Avatar>
                <div className="chat_headerInfo">
                    <h3>{roomName}</h3>
                <p > last seen {''} {new Date (messages[messages.length - 1]?.timestamp?.toDate()) .toUTCString()}  </p>
                </div>
            <div className="chat__headerRight">
            {/* <IconButton> <AddCircleIcon onClick = {openModal} color="disabled" fontSize="large" >
                </AddCircleIcon> 
            </IconButton>  */}
            <DialogModal></DialogModal>
                <IconButton>    
                    <AttachmentIcon></AttachmentIcon>
                </IconButton>
                    <IconButton>
                    <MoreVertIcon fontSize = 'inherit' ></MoreVertIcon>
                    </IconButton>
            </div>
            </div>
            {/* headerright */}

            <div className="chat__body">
                <FlipMove>
                    {/* messages */}

                {
                    
                    messages.map((message) => (
                        
                <p className={`chat__message ${ message.name === user?.displayName && 'chat__receiver'}`}>
                    <span className = 'chat__username'>
                        {message.name}
                        
                    </span>
                    
                    {message.message}

                    <span className = 'chat__timestamp'>
                    {new Date (message.timestamp?.toDate()) .toUTCString()} 
                    </span>

                </p>
                    )) 
                }
                    
                {/* Adding images here */}
                
                {
                    images.map((image) => (

                <p >
                    <span className = 'chat__username'>
                        {image.name}
                        {/* bhubesh */}
                    </span>
                    {/* need to add image */}
                    <div>
                        
                <img className = 'post_image' src ={image.imageUrl}></img>
            </div>
                    <span className = 'chat__timestamp'>
                    {new Date (image.timestamp?.toDate()) .toUTCString()} 
                    </span>

                </p>
                    )) 
                }

                {/* Cart Section */}

                {
                    
                    cartItem.map((cart) => (
                        
                        <div>

                        
                    <p className = 'chat__usernamecart'>
                        {cart.name}
                        bhubesh
                        </p>
                        <div className = 'cartchat'>
                            
            {/* image */}
            <div className = 'cartchat__image' >
                
                {/* <img  src = 'https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/10356511/2019/8/8/a28f9ccb-c0d7-4e66-87f0-e639f157ff2d1565263388836-Libas-Women-Kurta-Sets-571565263387250-1.jpg'></img> */}
                <img  src = {cart.message[1]}></img>
            </div>

            {/* info */}
            <div className = 'cartchat__info'>
                <h4 className = 'cartchat__title'>
                {/* Ethnic Print Kurta Set */}
                {cart.message[2]}
                </h4>
                {/* <p> sub title</p> */}

                {/* price */}

                <div  className = 'cartchat__price'>
                <p>
    <small>₹ {''}</small>

                     {/* <strong>999</strong> */}
                     <strong>{cart.message[3]}</strong>
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
        <span className = 'chat__timestamp'>
                    {new Date (cart.timestamp?.toDate()) .toUTCString()} 
                    </span>
        </div>
                    )) 
                }
                {/* Cart Section */}

                {/* Poll Section */}
                <div>

                {/* <Poll></Poll> */}
                </div>
                

                
               
                </FlipMove>
            </div>
          

            {/* chat body for the photo */}

            <div className="chat__footer">
                <div className = 'shopping_cart'>
                    {/* shopping cart */}
                    <ShareCart></ShareCart>

                </div>

            
            <IconButton>
                <div>

                 <PhotoLibraryIcon  onClick={() =>
                          document.getElementById("share_img").click()
                        } color="disabled" fontSize="large" >
                </PhotoLibraryIcon> 
               

                <input
                        type="file"
                        id="share_img"
                        style={{ display: "none" }}
                        onChange = {handleChange}
                        // accept="image/"
                      />
                </div>
            </IconButton>
            <IconButton>

                      <PublishIcon  onClick = {handleUpload}></PublishIcon>
            </IconButton>
            <form>
                <input value = {input} onChange = {e => setinput(e.target.value)}  type = 'text' placeholder = 'Type a message' >
                </input>
                <button  onClick = {sentMessage} type = 'submit' className = 'chat_footerbutton'> Sent a Message</button>
            </form>
            <MicIcon></MicIcon>
           
            </div>
        </div>
    )
}

export default Chat
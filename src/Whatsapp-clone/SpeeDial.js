import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
  { icon: <FavoriteIcon />, name: 'Like' },
];

export default function OpenIconSpeedDial() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden((prevHidden) => !prevHidden);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}




{/* {
                    images.map((image) => (

                <p className={`chat__image ${image.name === user.displayName && 'chat__receiver_image'}`}>
                    <span className = 'chat__username'>
                        {image.name}
                        bhubesh
                    </span>
                    need to add image
                    <div>
                        
                <img className = 'post_image' src ={image.imageUrl}></img>
            </div>
                    <span className = 'chat__timestamp'>
                    {new Date (image.timestamp?.toDate()) .toUTCString()} 
                    </span>

                </p>
                    ))  
                } */}




                  // useeffect for images
   
  //   useEffect(() => {
  //     let unsubscribe ;

  //     if (roomId) {
  //         unsubscribe = db.collection('rooms')
  //         .doc(roomId)
  //         .collection('images')
  //         .orderBy('timestamp' , 'desc')
  //         .onSnapshot((snapshot) => {
  //             setimages(snapshot.docs.map((doc) => doc.data()))
  //         })
  //     }

  //     return () => {
  //         unsubscribe ();
  //     };
  
  // }, [roomId])

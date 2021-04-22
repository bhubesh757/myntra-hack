import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { IconButton } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import NewPoll from './Poll/NewPoll';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Poll from '../Whatsapp-clone/Poll/Pages/Poll';
import Auth from '../Whatsapp-clone/Poll/Pages/Auth';
import PrivateRoute from '../Whatsapp-clone/Poll/Pages/PrivateRoute'
import './DialogModal.css';
import Polls from './Polls';
import { Home } from './Poll/Pages/Home';
import UserProvider from './Poll/firebase/UserProvider';

// poll


function DialogModal() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
    
    <IconButton> <AddCircleIcon onClick = {handleClickOpen} color="disabled" fontSize="large" >
                </AddCircleIcon> 
            </IconButton> 
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {/* <DialogTitle id="alert-dialog-title">{""}</DialogTitle> */}
      <DialogContent className = 'dialogmodal__content'>
        {/* <NewPoll></NewPoll> */}
        <UserProvider>
    <Router>
      <Switch>
        <PrivateRoute exact path = "/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        {/* <Route exact path="/not_found" component={Not_found} /> */}
        <PrivateRoute exact path = "/rooms/:roomId/:id" component={Poll} />
     
        {/* <Route path="*" exact={true} component={Not_found} /> */}
      </Switch>
      {/* <Footer /> */}
    </Router>
    </UserProvider>
      </DialogContent>
      <DialogActions>
        {/* <Button onClick={handleClose} color="primary">
          Disagree
        </Button> */}
        <Button onClick={handleClose} color="primary" autoFocus>
          Create Poll
        </Button>
      </DialogActions>
    </Dialog>
  </div>
  )
}

export default DialogModal

// import logo from './logo.svg';
import React ,{useEffect, useState} from 'react';
import './App.css';
import Sidebar from './Whatsapp-clone/Sidebar';
import Chat from './Whatsapp-clone/Chat'

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import Login from './Whatsapp-clone/Login';
import { useStateValue } from './StateProvider';
import SidebarPoll from './Whatsapp-clone/SidebarPoll';
import { Modal } from './Whatsapp-clone/Modal';
import { auth } from './firebase';
import { actionTypes } from './reducer';
// import NewPoll from './Whatsapp-clone/Poll/NewPoll';
import {useAuthState} from 'react-firebase-hooks/auth';


function App() {
  // Authenticationj
  // const [user, setuser] = useState(null);
  // lets pull the user from the reducer

  // const [{user} , dispatch] = useStateValue();     
  const [ user , loading] = useAuthState(auth);


  return (
  <div className="app">
 
      {
        !user ? (
          <Login></Login>
        ): (
      <div className="app_body">
        <Router>
          <Sidebar></Sidebar>
          <Switch>
          <Route path = '/rooms/:roomId'>
              <Chat></Chat>
          </Route>
          <Route path = '/'>
            <Chat></Chat>
          </Route>
          
          </Switch>
         
        </Router>
      </div>
      // <NewPoll></NewPoll>
        )
      }
    </div>
  );
}

export default App;

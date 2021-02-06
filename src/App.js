import React, { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import Feed from './componens/Feed';
import Header from './componens/Header';
import Sidebar from './componens/Sidebar';
import { login, logout, selectUser } from './features/userSlice';
import Login from './componens/Login';
import { auth } from './firebase';
import RightBar from './componens/RightBar';

function App() {
  const user =  useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({

          email : userAuth.email,
          uid : userAuth.uid,
          displayName : userAuth.displayName,

        }))

      }else{
        dispatch(logout())

      }
    })
    
   
  }, [])

  return (
    
    <div className="app">
      
      {/* Header */}
      <Header />

      {!user ? (
        <Login /> 
      ): (
        <div className="app__body">
        {/* Left side bar */}
        <Sidebar />
         
        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <RightBar />


      </div>

      )}
      
      
      
    </div>
  );
}

export default App;

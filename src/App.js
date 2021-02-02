import React from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import Feed from './componens/Feed';
import Header from './componens/Header';
import Sidebar from './componens/Sidebar';
import { selectUser } from './features/userSlice';
import Login from './componens/Login';

function App() {
  const user =  useSelector(selectUser);
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

      </div>

      )}
      
      
      
    </div>
  );
}

export default App;

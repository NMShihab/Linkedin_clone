import React from 'react';
import './App.css';
import Feed from './componens/Feed';
import Header from './componens/Header';
import Sidebar from './componens/Sidebar';

function App() {
  return (
    <div className="app">
      
      {/* Header */}
      <Header />
      
      <div className="app__body">
        {/* Left side bar */}
        <Sidebar />
         
        {/* Feed */}
        <Feed />

      </div>
      
    </div>
  );
}

export default App;

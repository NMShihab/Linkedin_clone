import React from 'react';
import './App.css';
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

      </div>
      
    </div>
  );
}

export default App;

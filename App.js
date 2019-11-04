import React from 'react';
import logo from './logo.svg';
import './App.css';
import Headers from './Component/Header';
import Tables from './Component/Table';
import CheckedItems from './Component/DisplayChecked';

function App() {
  return (
   <div className="App">
     <Headers/>
     <Tables/>
     <CheckedItems/>
   </div>

  );
}

export default App;

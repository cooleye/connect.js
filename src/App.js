import React,{Fragment} from 'react';

import './App.css';

import Header from './components/Header'
import List from './components/List'

function App() {
  return (
    <Fragment>
      <Header title="QQ"/>
      <List/>
    </Fragment>
   
  );
}

export default App;

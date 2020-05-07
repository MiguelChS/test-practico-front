import React from 'react';
import { Header } from './component/header/header';
import { Breadcrumbs } from './component/breadcrumbs/breadcrumbs';

const listWord = [
  {
    href:"#",
    text:'Hola'
  },
  {
    href:"#",
    text:'chau'
  },
  {
    href:"#",
    text:'besis'
  }
]

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Breadcrumbs listWord={listWord}></Breadcrumbs>
    </div>
  );
}

export default App;

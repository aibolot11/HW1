import logo from './logo.svg';
import './App.css';

import React from 'react'



function Header() {
  return (
    <div>Header
      < Title/>
    </div>
  )
}



function Content() {
  return (
    <div>Content
      <Title/>
    </div>
  )
}



function Footer() {
  return (
    <div>Footer
      <Title/>
    </div>
  )
}


function Title() {
  return (
    <div>Title</div>
  )
}


function App() {
  return (
    <div>
      < Header/>
      < Content />
      <Footer/>
    </div>
  );
}

export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Forms.jsx'
import Header from './header.jsx'
import Footer from './Footer.jsx'
import Center from './Center.jsx'

function App() {
  let num=10;

  return (
    <>
      <Forms></Forms>    
      <Header></Header>  
      <Footer></Footer>
      <Center></Center>
    </>
  )
}

export default App


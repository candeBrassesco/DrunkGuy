import { useState } from 'react'
import './App.css'
import Contenedor from './components/Contenedor/Contenedor'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Contenedor />
    </div>
  )
}

export default App

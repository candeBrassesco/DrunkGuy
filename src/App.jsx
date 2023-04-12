import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  )
}

export default App

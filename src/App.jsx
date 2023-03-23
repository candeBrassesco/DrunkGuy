import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import Navbar from './components/Navbar/Navbar'


function App() {
  const alertaEdad = () => alert('Para ver el listado de bebidas tenes que ser mayor de edad') 


  return (
    <div>
      <Navbar />
      <ItemListContainer alertaEdad={alertaEdad} />
    </div>
  )
}

export default App

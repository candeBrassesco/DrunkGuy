import {BrowserRouter, Routes, Navigate, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/precio/:ppr' element={ <ItemListContainer /> } />
        <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
        <Route path='*' element={ <Navigate  to='/' /> } />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

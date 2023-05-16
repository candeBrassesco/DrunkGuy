import {BrowserRouter, Routes, Navigate, Route} from 'react-router-dom'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'
import Checkout from './components/Checkout/Checkout'
import ScrollToTop from "react-scroll-to-top";
import scroll from './assets/scroll.png'
import './App.css'


function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className="App">
        <ScrollToTop smooth component={<img src={scroll} className=" img-fluid scrollImg"/>} />
        <Navbar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria/:pca' element={ <ItemListContainer /> } />
          <Route path='/detail/:pid' element={ <ItemDetailContainer /> } />
          <Route path='/cart' element={<CartContainer />} />
          <Route path='/checkout' element={  <Checkout />} />
          <Route path='*' element={ <Navigate  to='/' /> } />
        </Routes>
      </div>
    </CartContextProvider>
    </BrowserRouter>
  )
}

export default App

import { Link, NavLink } from 'react-router-dom'
import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
    <div className="conteiner__fluid text-center conteinerNavbar">
        <Link to="/">
            <img src={logo} alt="logo" className="navbarLogo"/>
        </Link> 
        <nav className="navbar navbar-expand-lg navbarNav">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul id="listaDeLinks" className="navbar-nav mx-auto mb-2 mb-lg-0">
                       <NavLink className={({isActive}) => isActive ? "linkActivado" : "linkDesactivado"} to='/'>
                          <li>Home</li>
                       </NavLink>
                       <NavLink className={({isActive}) => isActive ? "linkActivado" : "linkDesactivado"} to='/detail/:pid:1'> 
                          <li>Drinks</li>
                       </NavLink>
                       <NavLink className={({isActive}) => isActive ? "linkActivado" : "linkDesactivado"} to='/detail/:pid:2'>
                          <li>About Us</li>
                       </NavLink>
                       <NavLink to='/'>
                          <CartWidget />
                       </NavLink>   
                    </ul>     
                </div>
            </div>   
        </nav>
    </div>   
    )
}

export default Navbar
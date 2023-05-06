import { Link, NavLink } from 'react-router-dom'
import logo from './assets/logo.png'
import CartWidget from '../CartWidget/CartWidget'
import './Navbar.css'

const Navbar = () => {
    return (
    <div className="conteiner__fluid text-center conteinerNavbar">
        <Link to="/">
            <img src={logo} alt="logo" className="img-fluid navbarLogo"/>
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
                       <div className="dropdown">
                           <button className="dropdown-toggle linkDesactivado linkActivado" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Drinks
                           </button>
                           <ul className="dropdown-menu drinksDropdown" aria-labelledby="dropdownMenuButton1">
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/aguardiente'>
                                   <li>Aguardiente</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/aperitivos'>
                                   <li>Aperitivos</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/cerveza'>
                                   <li>Cerveza</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/licores'>
                                   <li>Licores</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/tequila'>
                                   <li>Tequila</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/vodka'>
                                   <li>Vodka</li>
                               </NavLink>
                               <NavLink className={({isActive}) => isActive ? "linkActivado2" : "linkDesactivado2"} to='/categoria/whisky'>
                                   <li>Whisky</li>
                               </NavLink>
                           </ul>
                       </div>
                       <NavLink className={({isActive}) => isActive ? "linkActivado" : "linkDesactivado"} to='/detail/2'>
                          <li>About Us</li>
                       </NavLink>
                       <NavLink to='/cart'>
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
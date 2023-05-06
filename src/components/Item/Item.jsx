import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({ producto }) => {


    return (
        <div  className="card itemCard">
            <img src={producto.img} alt={producto.nombre} className="itemImg"/>
            <div className="card-body itemBody">
                <h3 className="card-title">{producto.nombre}</h3>
                <p className="card-text">${producto.precio}</p>
            </div>
            <Link to={ `/detail/${producto.id}` }>
                <button className="itemBotonDetalle">Ver detalle</button>
            </Link>
        </div>
    )
}

export default Item
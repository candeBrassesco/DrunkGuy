import './Item.css'
import marco from './assets/marco.png'

const Item = ({ id, nombre, precio, img }) => {


    return (
        <div className="card itemCard">
            <img src={img} className="card-img-top productoImg" alt={nombre}/>
            <img src={marco} className="card-img-top marcoImg" alt="marco"/>
            <div className="card-body cardDatos">
               <p className="card-text cardNombre">{nombre}</p>
               <p className="card-text cardPrecio">{precio}</p>
            </div>
            <button className="cardBotonDetalle">Ver detalle</button>
        </div>
    )
}

export default Item
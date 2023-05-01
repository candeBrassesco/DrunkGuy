import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { Link } from 'react-router-dom'

const ItemDetail = ({product}) => {
    console.log(product)

    const [quantityAdded, setQuantityAdded] = useState(0)


    const handleOnAdd = (cantidad) => {
        setQuantityAdded(cantidad)
        alert(`Cantidad agregada al carrito: ${cantidad}`)
    }

    return (
        <div className="card detailContainer">
            <div className="row ">
                <div className="col-md-6 detailImgContainer">
                    <img src={product.img} className="img-fluid detailImg" alt={product.nombre} />
                </div>
                <div className="col-md-6 detailBodyContainer">
                    <div className="card-body detailBody">
                        <h3 className="card-title bodyTitulo">{product.nombre}</h3>
                        <p className="card-text bodyDescripcion">{product.descripcion}</p>
                        <p className="card-text bodyGraduacion">{product.graduacion}</p>
                        <p className="card-text bodyMedida">{product.medida}</p>
                        <p className="card-text bodyStock">Stock disponible: {product.stock}</p>
                        <h4 className="card-text bodyPrecio">{product.precio}</h4>
                    </div>
                    <div>
                        {
                            quantityAdded > 0 ? (
                                <div className="opciones">
                                    <Link to='/cart' className="opcion1"> Ir al carrito </Link>
                                    <Link to='/' className="opcion2"> Seguir comprando </Link>
                                </div>
                            ) : (
                                < ItemCount inicio={1} stock={product.stock} onAdd={handleOnAdd}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
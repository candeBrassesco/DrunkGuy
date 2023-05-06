import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({product}) => {

    const { agregarAlCart, cartList } = useCartContext()

    const [quantityAdded, setQuantityAdded] = useState(0)

    const handleOnAdd = (cantidad) => {
        setQuantityAdded(cantidad)
        agregarAlCart({ ... product, quantity: cantidad })
        console.log(`Cantidad agregada al carrito: ${cantidad}`)
    }

    console.log(cartList)

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
                        <h4 className="card-text bodyPrecio">${product.precio}</h4>
                    </div>
                    <div>
                        {
                            quantityAdded > 0 ? (
                                <div className="opciones">
                                    <Link to='/cart' className="opcion1"> Pay the bill </Link>
                                    <Link to='/' className="opcion2"> ¡Keep drinking! </Link>
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
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
    console.log(product)

    const onAdd = (cantidad) => {
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
                    < ItemCount inicio={1} stock={product.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
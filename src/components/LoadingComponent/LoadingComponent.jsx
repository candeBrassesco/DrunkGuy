import loader from './assets/beergif.gif'
import './LoadingComponent.css'


const LoadingComponent = () => {
    return (
        <div className="img-fluid loaderContainer" >
            <img src={loader}/>
            <p> loading ... </p>
        </div>
    )
}

export default LoadingComponent
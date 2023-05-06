import loader from './assets/berrgif.gif'
import './LoadingComponent.css'


const LoadingComponent = () => {
    return (
        <div className="loaderContainer" >
            <img src={loader}/>
            <p> loading ... </p>
        </div>
    )
}

export default LoadingComponent
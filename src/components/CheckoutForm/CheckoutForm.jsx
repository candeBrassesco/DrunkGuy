import { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ( { handleSubmit } ) => {
const [formData, setFormData] = useState ({
    name:'',
    phone:'', 
    email:''
})

const handleOnChange = (event) =>{
    event.preventDefault()
    setFormData({
        ... formData,
        [event.target.name]: event.target.value
    })    
}


    return(
        <div className="container__fluid formContainer">
            <form onSubmit={handleSubmit} className="form">
              <div className="form-outline mb-4">
                    <input 
                      type="text"  
                      className="input" 
                      value={formData.name}
                      onChange={handleOnChange} 
                    />
                    <label className="form-label" >Name</label>
              </div>
              <div className="form-outline mb-4">
                   <input 
                     type="text" 
                     className="input" 
                     value={formData.phone}  
                     onChange={handleOnChange}
                   /> 
                   <label className="form-label">Phone</label>
              </div>
              <div className="form-outline mb-4">
                   <input 
                     type="text" 
                     className="input" 
                     value={formData.email} 
                     onChange={handleOnChange}
                   />
                   <label className="form-label">Email</label>
              </div>
              <button type="submit" className="mb-4">Close bill</button>
            </form>
        </div>
    )
}

export default CheckoutForm
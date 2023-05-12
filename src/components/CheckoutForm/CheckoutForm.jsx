import { useState } from 'react'
import './CheckoutForm.css'

const CheckoutForm = ( { onConfirm } ) => {
const [name, setName] = useState('')
const [phone, setPhone] = useState('')
const [email, setEmail] = useState('')

const handleConfirm = (e) => {
    e.preventDefault()

    const userData = {
        name, phone, email
    }

    onConfirm(userData)
}

    return(
        <div className="container__fluid formContainer">
            <form onSubmit={handleConfirm} className="form">
              <div className="form-outline mb-4">
                    <input 
                      type="text"  
                      className="form-control" 
                      value={name}
                      onChange={({target})=> setName(target.name)} 
                    />
                    <label className="form-label" >Name</label>
              </div>
              <div className="form-outline mb-4">
                   <input 
                     type="text" 
                     className="form-control" 
                     value={phone}  
                     onChange={({target})=> setPhone(target.phone)}
                   /> 
                   <label className="form-label">Phone</label>
              </div>
              <div className="form-outline mb-4">
                   <input 
                     type="text" 
                     className="form-control" 
                     value={email} 
                     onChange={({target})=> setEmail(target.email)}
                   />
                   <label className="form-label">Email</label>
              </div>
              <button type="submit" className="mb-4">Close bill</button>
            </form>
        </div>
    )
}

export default CheckoutForm
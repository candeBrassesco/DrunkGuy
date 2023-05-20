import { useState } from "react"
import { useForm } from "../../hooks/useForm"
import './CheckoutForm.css'


const ChecKoutForm = ({onConfirm}) => {

    const {name, phone, email, setName, setPhone, setEmail, handleConfirm} = useForm(onConfirm)

    return(
        <div className="container__fluid formContainer">
        <form onSubmit={handleConfirm} className="form">
          <div className="row">
              <div className="col-25">
                  <label className="label">Name</label>
              </div>
              <div className="col-75">
                  <input 
                     type="text" 
                     value={name}
                     name="name" 
                     placeholder="Enter your name"
                     onChange={({target}) => setName(target.value)}o
                  />
              </div>
          </div>
          <div className="row">
              <div className="col-25">
                  <label className="label">Phone</label>
              </div>
              <div className="col-75">
                  <input 
                     type="text" 
                     value={phone} 
                     name="phone" 
                     placeholder="Enter your phone"
                     onChange={({target}) => setPhone(target.value)}
                  />
                  {error}
              </div>
          </div>
          <div className="row">
              <div className="col-25">
                  <label className="label" >Email</label>
              </div>
              <div className="col-75">
                  <input 
                     type="text" 
                     value={email} 
                     name="email" 
                     placeholder="youremail@gmail.com"
                     onChange={({target}) => setEmail(target.value)}
                  />
              </div>
          </div>
          <div className="row">
             <input type="submit" className="closeBill" value="Close bill"/>
          </div>
        </form>
      </div>
    )
}

export default ChecKoutForm
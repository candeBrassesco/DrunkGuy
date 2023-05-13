import { useState } from "react"
import './CheckoutForm.css'

const ChecKoutForm = ({onConfirm}) => {

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
                     onChange={({target}) => setName(target.value)}
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
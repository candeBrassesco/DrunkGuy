import { useEffect, useState } from "react";

export const useForm = (onConfirm) =>{
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState({})


    const handleConfirm = (e) => {
        e.preventDefault()

        const userData = {
            name, phone, email
        }

         // Validación del form
         if (!email || !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
            errors.email = "Invalid email address";
         return;
         }
 
         if (!name || name.length < 2) {
             errors.name = "Please enter your name";
         return;
         }
 
         if (!phone || !/^[0-9]{10}$/.test(phone)) {
             errors.phone = "Please enter your phone number";
         return;
         }
 
        onConfirm(userData)
    }


    useEffect(() => {
        setErrors({})        
    }, []);

    return {
       name,
       phone, 
       email,
       errors,
       setName, 
       setPhone, 
       setEmail, 
       handleConfirm
    };

}




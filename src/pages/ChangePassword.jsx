import { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alert from "../components/Alert"


const ChangePassword = () => {

  const {savePassword} = useAuth()

  const [password, setPassword] = useState({
          password_actual : ' ',
          password_new : ' '
  })
  const [alert, setAlert] = useState({})

  const handleSubmit = async e => {
    e.preventDefault()
  
    if(Object.values(password).some(camp => camp === ' ')){
      setAlert({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if(password.password_new.length < 4){
      setAlert({
        msg: 'Mínimo 4 carácteres',
        error: true
      })
      return
    }
    const respont = await savePassword (password) 
    setAlert(respont)
  }

  const {msg} = alert   
  return (
    <>
    <AdminNav/>
    <p className="mt-5 mb-10 text-center text-3xl ">Cambiar <span className="text-indigo-600 font-bold"> Password</span></p>
   <div className="flex justify-center">
       <div className=" p-5  lg:w-1/2 bg-indigo-100 shadow-lg rounded-lg">
           <form   
           onSubmit={handleSubmit}        
           >
                   <div className="mb-5">
                       <label
                               className=" text-indigo-800 block font-extrabold"
                               htmlFor="password_actual"
                       >Password Actual</label>
                       <input 
                               className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                                type="password" 
                                name="password_actual"
                                onChange={e => setPassword({
                                  ...password,
                                  [e.target.name] : e.target.value
                           })}
                                                    
                       />
                   </div>
                   <div className="mb-5">
                       <label
                               className=" text-indigo-800 block font-extrabold"
                               htmlFor="password_new"
                       >Nuevo Password</label>
                       <input 
                               className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                                type="password" 
                                name="password_new"
                                onChange={e => setPassword({
                                  ...password,
                                  [e.target.name] : e.target.value
                           })}
                                                    
                       />
                   </div>
                   {
                       msg && <Alert alert={alert}/>
                   }
                   <input 
                           className="mt-5 px-10 py-2 font-bold text-gray-100 w-full   rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                           type="submit"
                           value="Actualizar Password"
                    />
           </form>
       </div>
   </div>

</>
  )
}

export default ChangePassword
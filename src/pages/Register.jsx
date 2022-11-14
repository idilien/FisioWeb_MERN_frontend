import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Alert from '../components/Alert'
import axios from "axios"


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')
  
  const [alert, setAlert] = useState({})

  //VALIDATION FORM
  const handleSubmit = async (e) => {
    e.preventDefault();
    if([name,email,password,repeatPassword].includes('')){
      setAlert({msg:'Campos vacios', error: true})
      return;
    }
    if(password !== repeatPassword){
      setAlert({msg:'Password Diferentes', error: true})
      return;
    }
    if(password.length < 4 ){
      setAlert({msg:'Password min. 4 carácteres', error: true})
      return;
    }
    setAlert({})
    //CREATE USER IN API WITH AXIOS
        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/api/physios`
          await axios.post(url, {name, email, password}) 
          setAlert({msg: 'Registrado Correctamente, enviado email de confirmación', error:false})
          
          navigate('/') 
        } catch (error) {
          setAlert({ msg: error.response.data.msg,error: true })
        }
  }

  const{msg} = alert
  
  return (
    <>
        <div className="my-5 ">
               <h1 className="text-indigo-500 font-black text-3xl text-center">Registrate y <br/> <span className="text-indigo-800 text-4xl"> crea tu cuenta</span></h1>
        </div>
        <div className=' mt-20 md:mt-5 p-5 shadow-lg  rounded-lg bg-indigo-100'>

            <form 
                    onSubmit={handleSubmit}       
            >
                <div className="my-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                    >
                        Nombre
                    </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                     />
                </div>
                <div className="my-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                    >
                        Email
                    </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                     />
                </div>
                <div className="my-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                    >
                        Password
                    </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                     />
                </div>
                <div className="my-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                    >
                        Repetir Password
                    </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                            type="password"
                            value={repeatPassword}
                            onChange={e => setRepeatPassword(e.target.value)}
                     />
                </div>
               
                 {msg && <Alert
                      alert={alert}
                      />}
               
                <input 
                        className="mt-5 px-10 py-2 font-bold text-gray-100 w-full lg:w-auto  rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                        type="submit"
                        value="Registrarse"
                />
            </form>
            <nav className="mt-5  lg:flex lg:justify-between " >
                  <Link
                          className='my-5 px-8 py-1 font-semibold  block text-center text-indigo-500 border-2 border-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white '
                          to="/">Tengo cuenta</Link>    
                  {/* <Link
                          className='my-5 px-8 py-1 font-semibold  block text-center text-indigo-500 border-2 border-indigo-500 rounded-xl hover:bg-indigo-500 hover:text-white '
                          to="/confirm/20">Confirmar Correo</Link>     */}
            </nav> 
          
          
        </div>
    </>
  )
}

export default Register
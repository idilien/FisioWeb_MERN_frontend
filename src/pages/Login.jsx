import { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Alert from '../components/Alert'
import useAuth from '../hooks/useAuth'
import axios from "axios"

const Login = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [alert,setAlert] = useState({})
    const navigate = useNavigate()

   const {setAuth} =  useAuth()
   
   const handleSubmit = async  (e) => {
       e.preventDefault()
      if([email,password].includes('')){
        setAlert({
            msg: 'Todos los campos son obligatorios',
            error: true
        });
        return
      }
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/api/physios/login`
        const {data} = await axios.post(url, {email, password}) 
        console.log(data);
        localStorage.setItem('fisioweb_token', data.token)
        setAlert({msg: 'Iniciada Sesión Correctamente', error:false})
        setAuth(data)
        navigate('/admin') 

      } catch (error) {
        console.log(error);
        setAlert({ msg: error.response.data.msg,error: true })
      }
    }
    
    const {msg} = alert
  return (
    <>
        <div className="my-5 ">
               <h1 className="text-indigo-500 font-black text-4xl text-center">Iniciar Sesión <br/> <span className="text-indigo-800 text-5xl"> Profesionales</span></h1>
        </div>
        <div className=' mt-20 md:mt-5 p-5 shadow-lg  rounded-lg bg-gray-200'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label
                            className="uppercase text-gray-800 block font-bold"
                    >
                        Email
                    </label>
                    <input 
                            className="mt-2 p-1   bg-gray-300  w-full rounded-xl"
                            type="email"
                            value={email}
                            onChange= {e => setEmail(e.target.value)}
                     />
                </div>
                <div className="my-5 ">
                    <label
                            className="uppercase text-gray-800 block font-bold"
                    >
                        Password
                    </label>
                    <input 
                            className="mt-2 p-1   bg-gray-300  w-full rounded-xl"
                            type="password"
                            value={password}
                            onChange= {e => setPassword(e.target.value)}
                     />
                </div>
                        {msg && <Alert
                                alert={alert}/>}
                <input 
                        className="mt-5 px-10 py-2 font-bold text-gray-100 w-full lg:w-auto  rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                        type="submit"
                        value="Iniciar Sesión"
                />
            </form>   
            <nav className="mt-5  lg:flex lg:justify-between " >
             <Link
                    className='my-5 block text-center text-gray-500 '
                    to="/register">Registrate</Link>    
             <Link
                    className='my-5 block text-center text-gray-500 '
                    to="/forget">Recuperar Password</Link>    
            </nav>     
        </div>
    </>
  )
}

export default Login
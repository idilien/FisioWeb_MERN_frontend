import { useState } from 'react'
import {Link} from 'react-router-dom'
import Alert from '../components/Alert'
import axios from "axios"


const ForgetPassword = () => {
    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState({})

    const handleSubmit = async e =>{
        e.preventDefault()
        if(email === '' || email.length < 7){
            setAlert({msg: 'Campo vacio', error: true})
            return
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL }/api/physios/forget-password`
            const {data} = await axios.post(url, {email})
            console.log(data)
            setAlert({
                msg: data.msg,
                error: false
            })
            
        } catch (error) {
            setAlert({
                msg: error.response.data.msg,
                error: true
            })
        }

    }

    const {msg} = alert
  return (
    <> 
        <div className="my-5 ">
           <h1 className="text-indigo-500 font-black text-5xl text-center">Recuperar tu <br/> <span className="text-indigo-700"> Password</span></h1>
        </div>
        <div className=' mt-20 md:mt-5 p-5 shadow-lg  rounded-lg bg-gray-200'>
        <form 
                 onSubmit={handleSubmit}
        >      
            <div className="my-5">
                <label
                        className="uppercase text-gray-800 block font-bold"
                >
                    Email
                </label>
                <input 
                        className="mt-2 p-1   bg-gray-300  w-full rounded-xl"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                  />
            </div>
         
            <input 
                    className="my-5 px-10 py-2 font-bold text-gray-100 w-full lg:w-auto  rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                    type="submit"
                    value="Enviar"
            />
                  {msg && <Alert
                            alert={alert}
                      />}
        </form>
        <nav className="mt-5  lg:flex lg:justify-between " >
              <Link
                      className='my-5 block text-center text-gray-500 '
                      to="/">Inicio</Link>    
              
        </nav> 
</div>
    </>
  )
}

export default ForgetPassword
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Alert from "../components/Alert"
import {Link} from 'react-router-dom'
import axios from "axios"

const NewPassword = () => {
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState({})
  const [tokenValid, setTokenValid] = useState(false)
  const [passwordOk, setPasswordOk] = useState(false)

  const params = useParams()
  const {token} = params
  
  useEffect(() => {
    const checkToken =  async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL }/api/physios/forget-password/${token}`
         await axios(url)
        
      setAlert({
        msg: 'Introduce un nuevo password'
      })
      setTokenValid(true)
    } catch (error) {
      console.log(error)
      setAlert({
        msg: 'Error con el Enlace',
        error: true
      })
    }
  }
  checkToken()
}, [])

const handleSubmit = async (e) => {
  e.preventDefault()
  if(password.length < 4){
    setAlert({
      msg: 'Password min. 4 carácteres',
      error: true
    })
    return
  }
  try {
    const url = `${import.meta.env.VITE_BACKEND_URL }/api/physios/forget-password/${token}`
    const {data} = await axios.post(url,{password})

    setAlert({
      msg: data.msg
    })
    setPasswordOk(true)
    return
    
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
           <h1 className="text-indigo-500 font-black text-5xl text-center">Restablece tu <br/> <span className="text-indigo-700"> Password</span></h1>
        </div>
        <div className=' mt-20 md:mt-5 p-5 shadow-lg  rounded-lg bg-gray-200'>
          {msg && <Alert
                          alert={alert}
                    />}
                    {tokenValid && (
                          <form onSubmit={handleSubmit}>     
                                  <div className="my-5">
                                          <label
                                                  className="uppercase text-gray-800 block font-bold"
                                          >
                                              Nuevo Password
                                          </label>
                                          <input 
                                                  className="mt-2 p-1   bg-gray-300  w-full rounded-xl"
                                                  type="password"
                                                  value={password}
                                                  onChange={e => setPassword(e.target.value)}
                                                  
                                            />
                                      </div>
                                      <input 
                                      className="my-5 px-10 py-2 font-bold text-gray-100 w-full lg:w-auto  rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                                      type="submit"
                                      value="Guardar nuevo password"
                              />
                          </form>
                    )}
                                <nav className="mt-5  lg:flex lg:justify-between ">
                                  {passwordOk && 
                                      <Link
                                              className='my-5 block text-center text-gray-500 '
                                              to="/">Iniciar Sesión
                                      </Link>    
                                  }
                                <Link
                                        className='my-5 block text-center text-gray-500 '
                                        to="/">Inicio
                                </Link>    
                                
                                </nav>
        </div>
   </>
  )
}

export default NewPassword
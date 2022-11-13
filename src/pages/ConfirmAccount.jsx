import axios from "axios"
import { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import Alert from '../components/Alert'

const ConfirmAccount = () => {
  const [countConfirm, setCountConfirm] = useState(false)
  const [loading, setLoading] = useState(true)
  const [alert, setAlert] = useState({})


  const params = useParams();
  const {id} = params;
  
  useEffect(() => {
    const confirmCount = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL }/api/physios/confirm/${id}`
        const {data} = await axios(url)
        console.log(data);
        setCountConfirm(true)
        setAlert({
          msg: data.msg
        })

      } catch (error) {
        console.log(error.response)
        setAlert({
          msg: error.response.data.msg,
          error: true
        })
      }
      setLoading(false)
  
    }
    confirmCount();
    
  }, [])
  

  return (
    <>
        <div className="my-5 ">
               <h1 className="text-indigo-500 font-black text-5xl text-center">Confirma tu <br/> <span className="text-indigo-800">  Cuenta</span></h1>
        </div>
        <div className=' mt-20 md:mt-5 p-5 shadow-lg  rounded-lg bg-indigo-100'>

                     {!loading && <Alert
                            alert={alert}
                      />}
         
            <nav className="mt-5  lg:flex lg:justify-between " >
                      {countConfirm && (
                          <Link
                                  className='my-5 block text-center text-gray-500 '
                                  to="/">Iniciar Sesión</Link>    
                      )}
                  <Link
                          className='my-5 block text-center text-gray-500 '
                          to="/">Inicio</Link>    
            </nav> 
        </div>
    </>
  )
}

export default ConfirmAccount
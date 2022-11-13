import { useState, useEffect } from "react"
import Alert from "./Alert"
import useClients from "../hooks/useClients"


const FormAdmin = () => {

    const[name,setName] = useState('')
    const[surname,setSurname] = useState('')
    const[email,setEmail] = useState('')
    const[date,setDate] = useState('')
    const[id,setId] = useState(null)

    const[alert,setAlert] = useState({})

    const {saveClient, editClient} = useClients()
    
    useEffect(() => {
        if(editClient?.name){
            setName(editClient.name)
            setSurname(editClient.surname)
            setEmail(editClient.email)
            setDate(editClient.name)
            setId(editClient._id)
        }
    }, [editClient])
    
  
    const handleSubmit = e  => {
        e.preventDefault()
        if([name, surname, email,date].includes('')){
            setAlert({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }
        saveClient({
            name, 
            surname, 
            email,
            date,
            id
        })
        setAlert({
            msg: 'Guardado Correctamente'
        })
        setName('')
        setSurname('')
        setEmail('')
        setDate('')
        setId('')
    }

    const {msg} = alert
  return (
    <>
            <p className="mb-10 text-3xl text-center">
            {id ? 'Editar ' : "Registrar"} {''} <span className="text-indigo-600 font-bold">Cliente</span>
            </p>
        <div className=' m-3 md:mt-5 p-5 shadow-lg  rounded-lg bg-indigo-100'>
            <form onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                            htmlFor="name"
                    >Nombre  </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                           type="text" 
                           id="name" 
                           value={name}
                           onChange={e => setName(e.target.value)}                    
                           />
                </div>
                <div className="mb-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                            htmlFor="surname"
                    >Apellidos  </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                           type="text" 
                           id="surname" 
                           value={surname}
                           onChange={e => setSurname(e.target.value)}                       
                           />
                </div>
                <div className="mb-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                            htmlFor="email"
                    >Email </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                           type="email" 
                           id="email"   
                           value={email}
                           onChange={e => setEmail(e.target.value)}                     
                           />
                </div>
            
                <div className="mb-5">
                    <label
                            className=" text-indigo-800 block font-extrabold"
                            htmlFor="date"
                    >Fecha Alta </label>
                    <input 
                            className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                           type="date" 
                           id="date"   
                           value={date}
                           onChange={e => setDate(e.target.value)}                     
                           />
                </div>
                {msg && <Alert alert={alert} />}
                <input 
                        className="mt-5 px-10 py-2 font-bold text-gray-100 w-full lg:w-auto  rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                        type="submit"
                        value={id ? 'Guardar Cambios ' : "Agregar Cliente"}
                />
            </form>
        </div>
    </>
  )
}

export default FormAdmin
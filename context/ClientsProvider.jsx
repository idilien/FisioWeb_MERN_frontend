import { createContext, useState, useEffect } from "react"
import axios from "axios"

const ClientsContext = createContext()

const ClientsProvider = ({children}) => {

    const[clients, setClients] = useState([])
    const[editClient, setEditClient] = useState({})

    useEffect(() => {
      const getClients = async () => {

        try {
          const token = localStorage.getItem('fisioweb_token')
          if(!token) return

          const config = {
            headers: {
              " Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }

          const url = `${import.meta.env.VITE_BACKEND_URL}/api/clients`
          const {data} = await axios.get(url, config) 
          setClients(data)
        } catch (error) {
          console.log(error);
        }
      }
     getClients()
    }, [])
    

    const saveClient = async (client) => {
   
      const token = localStorage.getItem('fisioweb_token')
      const config = {
        headers: {
          " Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      
      if(client.id){
        console.log('Editando desde Provider')
        try {
          const url = `${import.meta.env.VITE_BACKEND_URL}/api/clients/${client.id}`
          const {data} = await axios.put(url, client, config)  
          const clientUpdate = clients.map(clientState => clientState._id  === data._id ? data : clientState)
          setClients(clientUpdate)
          } catch (error) {
            console.log(error);
          }
      }else{
        console.log('Registrando desde Provider')
        try {
              const url = `${import.meta.env.VITE_BACKEND_URL}/api/clients`
              const {data} = await axios.post(url, client, config) 
              const {createdAt, updatedAt, __v, ...clientStored} = data
              console.log(clientStored)
              setClients([clientStored, ...clients])
              setAlert({msg: 'Registrado Correctamente', error:false})
            } catch (error) {
                setAlert({msg: 'Error Registrado', error:true})
                console.log(`Desde Provider ${error}`);
              }
      }
      }
      
    const setEdit = (clientEdit) => {
        setEditClient(clientEdit)
    }

    const deleteClient = async id => {
      const confirmDelete = confirm('Seguro que deseas eliminar al cliente?')
      if(confirmDelete){
        try {
          const token = localStorage.getItem('fisioweb_token')
          if(!token) return

          const config = {
            headers: {
              " Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            }
          }

          const url = `${import.meta.env.VITE_BACKEND_URL}/api/clients/${id}`
          const {data} = await axios.delete(url, config)  
          
          const clientsUpdate = clients.filter( clientDel=> clientDel._id !== id)
          setClients(clientsUpdate)

        } catch (error) {
          console.log(error);
        }
      }
    }

  return (
   <ClientsContext.Provider
        value={{
                clients,
                saveClient,
                setEdit,
                editClient,
                deleteClient
        }}
   >
                {children}
   </ClientsContext.Provider>
  )
}
export {
    ClientsProvider
}

export default ClientsContext
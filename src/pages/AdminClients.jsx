import { useState } from "react"
import FormAdmin from "../components/FormAdmin"
import ListClients from "../components/ListClients"


const AdminClients = () => {

  const [displayForm, setDisplayForm] = useState(false)

  return (
        <div className="flex flex-col md:flex-row ">
              <button 
                          className="mx-5 mb-5 px-10 py-2 font-bold text-gray-100   rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400 md:hidden "
                          type="button"
                          onClick={() => setDisplayForm(!displayForm)}                   
              >{displayForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
              </button>
              <div className={`${displayForm ? 'block': 'hidden'} md:block md:w-1/2 lg:w-2/5`}>
                    <FormAdmin/>
              </div>
              <div className="md:w-1/2 lg:w-3/5">
                    <ListClients/>
              </div>
        </div>
  )
}

export default AdminClients
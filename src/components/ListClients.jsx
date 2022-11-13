import useClients from "../hooks/useClients.jsx"
import ClientDisplay from "./ClientDisplay.jsx";



const ListClients = () => {
  
  const {clients} = useClients()
  
  return (
    <>
                      
            <p className="mb-10 text-3xl  text-center ">
                Listado {''} <span className="text-indigo-600 font-bold">Clientes</span>
            </p>
             {/* <div className=' m-3 md:mt-5 p-5 shadow-lg  rounded-lg bg-indigo-100'> */}
             <div className='px-5 '>
              {clients.length ? 
                    (
                     <>
                      {/* <p className="mb-10 text-lg text-center">
                          Gestion {''} <span className="text-indigo-600 font-bold">Clientes</span>
                       </p> */}
                          {clients.map(client=> (
                            <ClientDisplay
                                key={client._id}
                                client={client}
                            />    
                          ))}
                    </>
                      )
                      : (
                        <>
                              <p className="mb-10 text-lg text-center">
                                  Listado de Clientes {''} <span className="text-indigo-600 font-bold">Vacia</span>
                              </p>
                        </>
                      )}

                  </div>
    </>
  )
}

export default ListClients
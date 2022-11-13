import useClients from "../hooks/useClients.jsx"



const ClientDisplay = ({client}) => {
  const {name, surname, email,date, _id} = client
  const {setEdit, deleteClient} = useClients()

  const formatDate = (date) => {
    const newDate = new Date(date)
    return new Intl.DateTimeFormat('es-ES', {dateStyle: 'long'}).format(newDate)
  }


  return (
        <div className="my-5 p-5 bg-indigo-100 rounded-lg shadow-md">
              <p className=" text-indigo-800 block font-extrabold">Nombre <br/>    <span className=" font-normal normal-case"> {name}</span></p>
              <p className=" text-indigo-800 block font-extrabold">Apellidos <br/>   <span className=" font-normal normal-case">{surname}</span></p>
              <p className=" text-indigo-800 block font-extrabold">Email <br/>         <span className=" font-normal normal-case">{email}</span></p>
              <p className=" text-indigo-800 block font-extrabold">Fecha Alta <br/> <span className=" font-normal normal-case">{formatDate(date)}</span></p>
            <div className="my-5 flex justify-between ">
                    <button
                       className="px-10 py-1 uppercase font-bold text-gray-100   rounded-xl bg-amber-500 hover:cursor-pointer hover:bg-amber-700  "
                       type="button"
                       onClick={() => setEdit(client)}
                       >
                      Editar
                    </button>
                    <button
                      className="px-10 py-1 uppercase font-bold text-gray-100    rounded-xl bg-red-500 hover:cursor-pointer hover:bg-amber-700  "
                        type="button"
                        onClick={() => deleteClient(_id)}
                    >
                      Eliminar
                    </button>
            </div>
        </div>
  )
}

export default ClientDisplay
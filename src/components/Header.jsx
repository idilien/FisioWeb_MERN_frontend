import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

  const {signOff} = useAuth() 

  return (
    <header className="py-10 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-4xl  text-indigo-200 text-center">Gestión Clientes <span className="text-indigo-300 font-black"> Fisio Web </span></h1>
            <nav className="mt-5 md:mt-0 flex flex-col md:flex-row  gap-4 items-center">
                <Link to={"/admin"} className="text-white text-xl font-bold">Clientes</Link>
                <Link to={"/admin/profile"} className="text-white text-xl font-bold">Perfil</Link>
                <button 
                        className="px-2 text-white text-xl font-bold  border rounded-lg"
                        type="button"
                        onClick={signOff}>
                            Cerrar Sesión
                </button>
            </nav>
        </div>
    </header>
  )
}
export default Header
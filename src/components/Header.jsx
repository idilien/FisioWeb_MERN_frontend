import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const Header = () => {

  const {signOff} = useAuth() 

  return (
    <header className="py-5 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col items-center md:flex-row">
            {/* <img className="w-36" src="logo_physio.svg" alt="logo physio" /> */}
            <h1 className="text-5xl  text-indigo-100 text-center font-black">Fisio Web  <span className="text-indigo-300 font-normal"> </span></h1>
          </div>
            <nav className="mt-5 md:mt-0 flex flex-col md:flex-row  gap-4 items-center">
                <Link to={"/"} className="text-white text-xl font-bold">Inicio</Link>
                <Link to={"/admin/profile"} className="text-white text-xl font-bold">Perfil</Link>
                <button 
                        className="px-2 text-white text-xl font-bold  border-2 rounded-lg"
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
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const HeaderAuth = () => {

  const {signOff} = useAuth() 

  return (
    <header className="py-5 bg-indigo-600">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
            <img className="w-36" src="logo_physio.svg" alt="logo physio" />
            <Link to={"/"}>
            <h1 className="text-5xl  text-indigo-100 text-center font-black">Fisio Web  <span className="text-indigo-300 font-normal">  Administración </span></h1>
            </Link>
        </div>
    </header>
  )
}
export default HeaderAuth
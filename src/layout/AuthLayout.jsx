import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
const AuthLayout = () => {
  return (
   <>
            <header className="py-10 bg-indigo-600">
                  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                      <h1 className="text-4xl  text-indigo-200 text-center">Gestión Clientes <span className="text-indigo-300 font-black"> Fisio Web </span></h1>
                      <nav className="mt-5 md:mt-0 flex flex-col md:flex-row  gap-4 items-center">
                          <Link to={"/admin"} className="text-white text-xl font-bold">Clientes</Link>
                          <Link to={"/admin"} className="text-white text-xl font-bold">Profesionales</Link>
                        
                      </nav>
                  </div>
              </header>
        <main className="px-5 mt-10 container mx-auto md:grid md:grid-cols-2 gap-12 items-center">
        <Outlet/>
        </main>
     
   </>
  )
}

export default AuthLayout
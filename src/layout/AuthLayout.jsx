import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import HeaderAuth from '../components/HeaderAuth'
import Footer from "../components/Footer"
HeaderAuth

const AuthLayout = () => {
  return (
   <>
        <HeaderAuth/>
        <main className="px-5 mt-10 container mx-auto md:grid md:grid-cols-2 gap-12 items-center">
        <Outlet/>
        </main>
        <Footer/>
   </>
  )
}

export default AuthLayout
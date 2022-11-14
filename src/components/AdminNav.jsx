import { Link } from "react-router-dom"


const AdminNav = () => {
  return (
    <nav className=" mx-5 flex flex-col gap-3 items-end">
        <Link
            className="font-bold text-indigo-500"
            to="/admin/profile"
        >
            Perfil
        </Link>
        <Link
            className="font-bold text-indigo-500 "
            to="/admin/changepassword"
        >
            Cambiar Password
        </Link>

    </nav>
  )
}

export default AdminNav
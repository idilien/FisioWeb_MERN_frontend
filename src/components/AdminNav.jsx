import { Link } from "react-router-dom"


const AdminNav = () => {
  return (
    <nav className="flex gap-3">
        <Link
            className="font-bold "
            to="/admin/profile"
        >
            Perfil
        </Link>
        <Link
            className="font-bold "
            to="/admin/changepassword"
        >
            Cambiar Password
        </Link>

    </nav>
  )
}

export default AdminNav
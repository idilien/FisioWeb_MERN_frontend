import {BrowserRouter, Routes, Route} from "react-router-dom"
import { AuthProvider } from "../context/AuthProvider"
import { ClientsProvider } from "../context/ClientsProvider"
import AdminLayout from "./layout/AdminLayout"
import AuthLayout from "./layout/AuthLayout"
import AdminClients from "./pages/AdminClients"
import ChangePassword from "./pages/ChangePassword"
import ConfirmAccount from "./pages/ConfirmAccount"
import EditProfile from "./pages/EditProfile"
import ForgetPassword from "./pages/ForgetPassword"
import Login from "./pages/Login"
import NewPassword from "./pages/NewPassword"
import Register from "./pages/Register"


function App() {
  
  return (
    <BrowserRouter>
        <AuthProvider>
          <ClientsProvider>
              <Routes>
                      <Route
                                path="/"
                                element={<AuthLayout/>}  >
                                <Route index element={<Login/>}/>
                                <Route path="register" element={<Register/>}/>
                                <Route path="confirm/:id" element={<ConfirmAccount/>}/>
                                <Route path="forget" element={<ForgetPassword/>}/>
                                <Route path="forget/:token" element={<NewPassword/>}/>
                      </Route>
                      <Route 
                                path="/admin" element={<AdminLayout/>}>
                                  <Route index element={<AdminClients/>}/>
                                  <Route path="profile" element={<EditProfile/>}/>
                                  <Route path="changepassword" element={<ChangePassword/>}/>
                      </Route>
                 </Routes>
            </ClientsProvider>
          </AuthProvider>
   </BrowserRouter>
  )
}

export default App

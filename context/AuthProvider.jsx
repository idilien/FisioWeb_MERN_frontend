import axios from "axios"
import { useState, useEffect,  createContext } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)
    const [auth, setAuth] = useState({})

    useEffect(() => {
        const authUser = async () => {
            const token = localStorage.getItem('fisioweb_token')
            if(!token) {
                setLoading(false)
                return
            }
            const config = {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            try {
                const url = `${import.meta.env.VITE_BACKEND_URL}/api/physios/profile`
                const {data} = await axios(url, config ) 
                setAuth(data)
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({})
            }
            setLoading(false)
        }
        authUser()
    }, [])

    const signOff = () => {
        localStorage.removeItem('fisioweb_token')
        setAuth({})
    } 

    const updateProfile = async datas => {
        const token = localStorage.getItem('fisioweb_token')
        if(!token) {
            setLoading(false)
            return
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/physios/profile/${datas._id}`
            const {data} = await axios.put(url, datas, config ) 
            return {
                msg: 'Actualizado Correctamente'
            }
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error: true
            }
        }
    }
    const savePassword = async (datas) => {
       
        const token = localStorage.getItem('fisioweb_token')
        if(!token) {
            setLoading(false)
            return
        }
        const config = {
            headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/physios/update-password`
            const {data} = await axios.put(url, datas, config ) 
            return {
                msg: data.msg
            }
        } catch (error) {
            return{
                msg: error.response.data.msg,
                error: true
            }
        }

    }

    return(
        <AuthContext.Provider
                    value={{
                        auth,
                        setAuth,
                        loading,
                        signOff,
                        updateProfile,
                        savePassword
                    }}
        >
                            {children}
        </AuthContext.Provider>
    )
}

export { 
    AuthProvider
}

export default AuthContext

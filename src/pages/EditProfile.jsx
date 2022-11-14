import { useState, useEffect } from "react";
import AdminNav from "../components/AdminNav"
import useAuth from "../hooks/useAuth"
import Alert from "../components/Alert"


const EditProfile = () => {

    const {auth, updateProfile} = useAuth()
    
    const [profile, setProfile] = useState({})
    const [alert, setAlert] = useState({})

    useEffect(() => {
        setProfile(auth)
        
    }, [auth])
    

    const handleSubmit = async e =>{
        e.preventDefault()

        const {name, email, mobile, web} = profile
        if([name,email].includes('')){
            setAlert({
                msg: 'Email y Nombre son obligatorios',
                error: true
            })
            return
        }
        const result = await  updateProfile(profile)
        setAlert(result)
    }
    const {msg} = alert   

  return (
    <>
         <AdminNav/>
         <p className="mt-5 mb-10 text-center text-3xl ">Editar <span className="text-indigo-600 font-bold"> Perfil</span></p>
        <div className="flex justify-center">
            <div className=" p-5  lg:w-1/2 bg-indigo-100 shadow-lg rounded-lg">
                <form 
                        onSubmit={handleSubmit}
                >
                        <div className="mb-5">
                            <label
                                    className=" text-indigo-800 block font-extrabold"
                                    htmlFor="name"
                            >Nombre  </label>
                            <input 
                                    className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                                    type="text" 
                                    name="name"   
                                    value={profile.name || ''}         
                                    onChange={e => setProfile({
                                            ...profile,
                                            [e.target.name] : e.target.value
                                    })}          
                                />
                        </div>

                        <div className="mb-5">
                            <label
                                    className=" text-indigo-800 block font-extrabold"
                                    htmlFor="mobile"
                            >Movil  </label>
                            <input 
                                    className="mt-2 p-1 text-gray-900  bg-indigo-200  w-full rounded-xl"
                                    type="text" 
                                    name="mobile"   
                                    value={profile.mobile || '556545647'}         
                                    onChange={e => setProfile({
                                            ...profile,
                                            [e.target.name] : e.target.value
                                    })}          
                                />
                        </div>
                        <div className="mb-5">
                            <label
                                    className=" text-indigo-800 block font-extrabold"
                                    htmlFor="web"
                            >Sitio Web  </label>
                            <input 
                                    className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                                    type="text" 
                                    name="web"   
                                    value={profile.web || 'Fisio web'}         
                                    onChange={e => setProfile({
                                            ...profile,
                                            [e.target.name] : e.target.value
                                    })}          
                                />
                        </div>
                      
                        <div className="mb-5">
                            <label
                                    className=" text-indigo-800 block font-extrabold"
                                    htmlFor="email"
                            >Email </label>
                            <input 
                                    className="mt-2 p-1   bg-indigo-200  w-full rounded-xl"
                                type="email" 
                                name="email"
                                value={profile.email || ''}         
                                onChange={e => setProfile({
                                        ...profile,
                                        [e.target.name] : e.target.value
                                })}                                 
                            />
                        </div>
                        {
                            msg && <Alert alert={alert}/>
                        }
                        <input 
                                className="mt-5 px-10 py-2 font-bold text-gray-100 w-full   rounded-xl bg-indigo-500 hover:cursor-pointer hover:bg-indigo-400  "
                                type="submit"
                                value="Actualizar Perfil"
                         />
                </form>
            </div>
        </div>
    
    </>
  )
}

export default EditProfile
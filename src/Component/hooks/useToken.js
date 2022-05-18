import axios from "axios"
import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('')
    useEffect(() => {
        const email = user?.user?.email
        const currentUser = {email}
        if(email){
            axios.put(`https://doctorsportal-api.herokuapp.com/user/${email}`, currentUser)
            .then(data =>{
                console.log(data.data)
                localStorage.setItem('accessToken', data.data.token)
                setToken(data.data.token)
            })
        }
    },[user])
    return [token]
}

export default useToken
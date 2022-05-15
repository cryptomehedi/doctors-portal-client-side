import { useEffect, useState } from "react";
import axiosPrivate from "../Api/axiosPrivate";

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false)
    const {email} = user;
    useEffect(() =>{
        axiosPrivate.get(`http://localhost:4000/admin/${email}`)
        .then(data=>{
            setAdmin(data?.data)
            })
    },[email])
    return [admin]
}

export default useAdmin
import { useEffect, useState } from "react";
import axiosPrivate from "../Api/axiosPrivate";

const useAdmin = user =>{
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    const {email} = user;
    useEffect(() =>{
        axiosPrivate.get(`http://localhost:4000/admin/${email}`)
        .then(data=>{
            setAdmin(data?.data)
            setAdminLoading(false)
            })
    },[email])
    return [admin, adminLoading]
}

export default useAdmin
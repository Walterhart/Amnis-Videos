
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import useFetchUser from "./useFetchUser";

const useFetchProfile = () => {
    const {user} = useFetchUser(null)
    const [isPending, setIsPending] = useState(true);
    const [profile,setProfile] =useState('')
  
    useEffect(()=>{
        const fetchProfile =async() =>{
            const { data, error } = await supabase
            .rpc('get_profile')
            .eq('id', user.id)
            .single()
                if(error && error.code!== '22P02' ){
                    console.log(error)
                 }
                if (data){
                    setProfile(data)
                }
                
        }
        if(user !== undefined)
        {
         fetchProfile()
         setIsPending(false)
        }
       
    },[user])
    
    return {profile, isPending};
}

 
export default useFetchProfile;
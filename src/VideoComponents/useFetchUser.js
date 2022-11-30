
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const useFetchUser = () => {
    const[isLoading,setIsLoading]= useState(true)
    const [user,setUser] =useState('')
    useEffect(() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    setUser(value.data.user)
                    setIsLoading(false)
                }
            })
        }
          
        getUserData()
    }, [])
    
    return {user, isLoading};
}
 
export default useFetchUser;
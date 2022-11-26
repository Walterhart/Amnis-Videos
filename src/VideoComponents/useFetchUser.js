
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const useFetchUser = () => {

    const [user,setUser] =useState('')
    useEffect(() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    setUser(value.data.user)
                }
            })
        }
          
        getUserData()
    }, [])
    
    return {user};
}
 
export default useFetchUser;
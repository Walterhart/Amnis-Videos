
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const useFetchUser = () => {

    const [user,setUser] =useState({})
    const [isPending, setIsPending] = useState(true);
    useEffect(() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    setIsPending(false)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])
    
    return {user, isPending};
}
 
export default useFetchUser;
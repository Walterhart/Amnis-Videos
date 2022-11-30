import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import useFetchUser from "./useFetchUser";

const useFetchFavorite = (platform) => {
    const {user} = useFetchUser('')
    const [isPending, setIsPending] = useState(true);
    const [favorites,setFavorites] =useState(null)
    useEffect(()=>{
        const fetchFavorite =async() =>{
           
            const { data, error } = await supabase
            .rpc('get_'+platform+'_favorite', {
                user_num: user.id
              })
                if(error && error.code!== '22P02' ){
                    setFavorites(null)
                    console.log(error)
                 }
                if (data){
                    setFavorites(data)
                    setIsPending(false)
                }
                
        }
       
        if (user.id !== undefined) {
            fetchFavorite()
            setIsPending(false)
        }
        
       
    },[user, platform])

    return {favorites, isPending};
}

 
export default useFetchFavorite;
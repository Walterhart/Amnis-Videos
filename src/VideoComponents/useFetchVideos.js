import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";

const useFetchvideo = ({platform}) => {
    const [isPending, setIsPending] = useState(true);
    const [videos,setVideos] =useState(null)
  
    useEffect(()=>{
        const fetchvideos =async() =>{
           
            const { data, error } = await supabase
            .select('*')
            .from(platform)
            
                if(error && error.code!== '22P02' ){
                    setVideos(null)
                    console.log(error)
                 }
                if (data){
                    setVideos(data)
                    console.log(platform)
                    setIsPending(false)
                }
                
        }
        fetchvideos()
        
       
    },[])

    return {videos , isPending};
}

 
export default useFetchvideo;
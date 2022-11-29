import { useEffect } from "react"
import { useState } from "react"
import { supabase } from "../config/supabaseClient"
import VidoeList from "./VideoList"


const RecocomendByDirector = ({platform, director}) => {
    
    const [videos,setVideos]= useState()
    //console.log('Passin',platform, director)
      
    useEffect(()=>{
        const fetchvideos = async () => {
        const { data, error } = await supabase
        .rpc('get_director_videos_'+platform, {
            director_id: director.person_id
        })
    
        if (error) console.error(error)
        else {

            setVideos(data)
            console.log('datavalue',data)
            
        }
    }
    if(director !==null || director !==undefined){
    fetchvideos()
    }
  
    },[])
   
    return ( 
        <div>
        <h3>Reccomend base off of {director.name}:</h3>
        {videos && videos.map(video =>(
                <VidoeList key={video.video_id} video={video}/>
            ))}
           
        </div>
     );
}
 
export default RecocomendByDirector;
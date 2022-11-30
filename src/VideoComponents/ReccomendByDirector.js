import { useEffect } from "react"
import { useState } from "react"
import { supabase } from "../config/supabaseClient"
import VidoeList from "./VideoList"


const RecommendByDirector = ({platform, director,id}) => {
    
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
        }
    }
    if(director !==null || director !==undefined){
        fetchvideos()
    }
  
    },[director,platform])

   
    return ( 
        <div>
              <h3>Recommend based on director  {director.name}</h3>

        {videos && videos.map(video =>(

               <div  key={video.video_id}>
                {video.video_id !== id ?
                <>
                 
                <VidoeList video={video} platform={platform}/>
                </>
                :
                <>
                </>
                }

               
               </div>
            ))}
           
        </div>
     );
}
 
export default RecommendByDirector;
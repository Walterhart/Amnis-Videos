import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const VideoDetail = () => {
    const [video,setVideo] = useState('');
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(()=>{
        const fetchVideos =async() =>{
            const { data, error } = await supabase
            .from('netflix_titles')
            .select()
            .eq('show_id',id)
            .single()
                if(error){
                    navigate('/', {replace: true})
                 }
                if (data){
                    setVideo(data)  
                }
                
        }
        fetchVideos()
    },[id, navigate])
    return ( 
        <div className="video-details">
            <h1>{video.title}</h1>
            <h3>Description:</h3>
            <p> {video.description}</p>
            <h3>{video.type} {video.duration}</h3>
            <h3> {video.rating}</h3>
            <h3>Genre: {video.listed_in} </h3>
         
            
            <h3>Cast: </h3>
            <p>{video.cast}</p>
            <h3> Release year: </h3>
            <p>{video.release_year}</p>
            <h3> Country: </h3>
            <p>{video.country}</p>

        
        </div>
     )
}
 
export default VideoDetail;
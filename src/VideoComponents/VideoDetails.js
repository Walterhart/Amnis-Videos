import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const VideoDetail = ({platform}) => {
    const [video,setVideo] = useState('');
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(()=>{
        const fetchVideos =async() =>{
            const { data, error } = await supabase
            .rpc('get_' + platform)
            .eq('video_id',id)
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
            <h3>{video.type} Runtime: {video.runtime}</h3>
            <h3> {video.age_certification}</h3>
            <h3>Genre: {video.genres} </h3>
            <h3>Description:</h3>
            <p> {video.description}</p>
            
            <h3> Release year: </h3>
            <p>{video.release_year}</p>
            <p>{video.production_countries}</p>
        
        </div>
     )
}
 
export default VideoDetail;
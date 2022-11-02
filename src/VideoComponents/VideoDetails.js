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
            <h3>{video.type}</h3>
            <h3>{video.rating}</h3>
            <h3>{video.duration}</h3>
            <h3>Genres:{video.listed_in} </h3>
            <p>Description: {video.description}</p>
            <h3>Director: {video.director}</h3>
            <h4>Cast: {video.cast}</h4>
            <h4> Release year: {video.release_year}</h4>
            <h4> Country available: {video.country}</h4>

        
        </div>
     )
}
 
export default VideoDetail;
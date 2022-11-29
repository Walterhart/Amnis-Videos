import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import useFetchFavorite from "./useFetchFavorite";
import FavoriteControl from "./FavortieControl.";
import useFetchUser from "./useFetchUser";
import RecommendByDirector from "./ReccomendByDirector";


const VideoDetail = ({platform}) => {
    const [video,setVideo] = useState('');
    const [casts,setCasts] = useState('');
    const [directors,setDirectors] = useState('');
    const {user} = useFetchUser('')
   
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
        const fetchCasts =async() =>{
            const { data, error } = await supabase
            .rpc( 'get_'+platform+'_credits')
            .eq('video_id',id)
            .eq('role','ACTOR')
                if(error){
                    navigate('/'+platform, {replace: true})
                 }
                if (data){
                    setCasts(data)  
                }
                
        }
        const fetchDirectors =async() =>{
            const { data, error } = await supabase
            .rpc( 'get_'+platform+'_credits')
            .eq('video_id',id)
            .eq('role','DIRECTOR')
                if(error){
                    navigate('/'+platform, {replace: true})
                 }
                if (data){
                    setDirectors(data)  
                    
                }
                
        }

        fetchVideos()
        fetchDirectors()
        fetchCasts()
        
    },[id, navigate,platform])


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
            <h3>Characters:</h3>
            {casts && casts.map((cast) => 
            <div className="cast" key={cast.id}>
                <p> {cast.name} as {cast.character}</p>
            </div>          
            )}
            <h3>Director:</h3>
           
            {directors && directors.map((director) => 
            <div className="cast" key={director.id}> 
                <p> {director.name}  </p>
            </div>

            
            )}
            {user && user!==null ?
            <>
             
             <FavoriteControl  id ={id} platform={platform} user={user}/> 
             </>
             :
             <>
                <h3>Please login for other feature</h3>
             </>
            }
            
            {directors && directors!== null && directors.map((director) => (
            
            <RecommendByDirector key={director.id} director={director}  platform={platform}/> 
        
            
          ))}
            
            
           
        </div>
     )
}
 
export default VideoDetail;
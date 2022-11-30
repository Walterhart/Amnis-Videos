import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import FavoriteControl from "./FavortieControl.";
import useFetchUser from "./useFetchUser";
import RecommendByDirector from "./ReccomendByDirector";


const VideoDetail = ({platform}) => {
    const [video,setVideo] = useState('');
    const [casts,setCasts] = useState('');
    const [directors,setDirectors] = useState('');
    const {user} = useFetchUser('')
    const[isLoading,setIsLoading]= useState(true)
    const navigate = useNavigate()
    const { id } = useParams()
    
    let genres 
    let genres_string
    let production 
    let production_string 


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
                    setIsLoading(false)                    
                       
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
        console.log(directors.person_id==null)
    
            
        
    },[id, navigate,platform])
    if(video && video!==null){
        genres = video.genres.slice(1, -1) //to get rid of [ and ]
        genres_string= genres.replaceAll("\'", "")
        production = video.production_countries.slice(1, -1) //to get rid of [ and ]
        production_string = production.replaceAll("\'", "")
    }
    
   


    return ( 
        
        <div className="video-details">
            {  isLoading? <> <div>Loading...</div> </>:<>
            <h1>{video.title}</h1>
            <h3>{video.type} Runtime: {video.runtime} minutes</h3>
            <h3> {video.age_certification}</h3>
           
            <h3>Genre:  </h3>
            <p>{video && genres_string }</p>
            <h3>Description:</h3>
            <p> {video.description}</p>

            <h3> Release year: </h3>
            <p>{video.release_year}</p>
            <h3>Country:</h3>
            <p>{video && production_string}</p>
            <h3>Characters:</h3>
            {casts && (casts.map((cast) => 
            <div className="cast" key={cast.id}>
                <p> {cast.name} as {cast.character}</p>
            </div>          
            ))}
            <h3>Director:</h3>
            {directors && directors.map((director) => 
            <div className="cast" key={director.id}> 
                <p> {director.name}  </p>
            </div>
            )}

            {video.imdb_score!=null && <div><h3>IMDB score:</h3><p> {video.imdb_score}</p></div>}
            {video.imdb_votes!=null && <div> <h3>IMDB votes: </h3><p>{video.imdb_votes}</p></div>
                
            }
           
           {video.tmdb_popularity!=null  && <div><h3>TMDB Popularity: </h3><p>{video.tmdb_popularity}</p></div> }
            
           {video.tmdb_score!=null  && <div><h3>TMDB Score: </h3><p>{video.tmdb_score}</p></div>}        
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
            
            <RecommendByDirector key={director.id} director={director}  platform={platform} id={id}/> 
        
            
          ))}
            
            
            </>}
        </div>
     )
}
 
export default VideoDetail;
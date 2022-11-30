import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from 'react';
import VidoeList from "../VideoComponents/VideoList";



const Disney = () => { 
  const [fetchError, setFetchError] = useState(null)
  const [videos, setvideos] = useState(null)
  const [orderBy, setOrderBy] = useState('title')
  const [list, setList] = useState("");

  useEffect(() => {
    const fetchvideos = async () => {
      const { data, error } = await supabase
        .rpc('get_disney')
        .order(orderBy)
       
      if (error) {
        setFetchError('Could not fetch the videos')
        setvideos(null)
      }
      if (data) {
        setvideos(data)
        console.log("data",data)
        setFetchError(null)
      }
    }

    fetchvideos()

  }, [orderBy])
  
  return (

    
    <div className="page-home">
    {fetchError && (<p>{fetchError}</p>)}

        <input 
        type="text"
        placeholder="search..."
        onChange={(event) => {
            setList(event.target.value);
        }}
        />
        
     {videos && (
        
      <div className="videos">
         <div className="order-by">
                <p>Order by:</p>
                <button onClick={() => setOrderBy('title')}>Title</button>
                <button onClick={() => setOrderBy('type')}>Type of video</button>
                <button onClick={() => setOrderBy('release_year')}>Year released</button>
                <button onClick={() => setOrderBy('tmdb_score')}>TMDB score</button>
                <button onClick={() => setOrderBy('imdb_score')}>IMDB score</button>
                <button onClick={() => setOrderBy('runtime')}>Length</button>
            </div>
            {videos && videos.filter((video) => {
                    if(list === ""){
                        return video
                    }
                    else if(video.title.toLowerCase()
                            .includes(list.toLowerCase())){
                        return video
                    }

                }).map(video =>(
              <VidoeList key={video.video_id} video={video} platform='disney'/>
          ))}
      </div>
     )}
  
  </div>
  )
  
}
 
export default Disney;
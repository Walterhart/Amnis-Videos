import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from 'react';
import VidoeList from "../VideoComponents/VideoList";



const Hulu = () => { 
  const [fetchError, setFetchError] = useState(null)
  const [videos, setvideos] = useState(null)
  const [orderBy, setOrderBy] = useState('title')

  useEffect(() => {
    const fetchvideos = async () => {
      const { data, error } = await supabase
        .rpc('get_hulu')
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
     {videos && (
        
      <div className="videos">
         <div className="order-by">
                <p>order by:</p>
                <button onClick={() => setOrderBy('title')}>Title</button>
                <button onClick={() => setOrderBy('type')}>Type of video</button>
                <button onClick={() => setOrderBy('release_year')}>Year released</button>
            </div>
          {videos.map(video =>(
              <VidoeList key={video.video_id} video={video} platform='Hulu'/>
          ))}
      </div>
     )}
  
  </div>
  )
  
}
 
export default Hulu;
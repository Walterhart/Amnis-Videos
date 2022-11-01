import { supabase } from "../config/supabaseClient";
import { useEffect, useState } from 'react'
import VidoeList from "../VideoList";

const Home = () => {
  const [fetchError, setFetchError] = useState(null)
  const [videos, setvideos] = useState(null)
  const [orderBy, setOrderBy] = useState('title')

  useEffect(() => {
    const fetchvideos = async () => {
      const { data, error } = await supabase
        .from('netflix_titles')
        .select('*')
        .order(orderBy)
      
      if (error) {
        setFetchError('Could not fetch the videos')
        setvideos(null)
      }
      if (data) {
        setvideos(data)
        console.log(videos)
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
                {orderBy}
            </div>
            {videos.map(video =>(
                <VidoeList key={video.show_id} video={video}/>
            ))}
        </div>
       )}
    
    </div>
  )
}

export default Home
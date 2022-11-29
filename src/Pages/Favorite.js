import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";
import useFetchFavorite from "../VideoComponents/useFetchFavorite";
import VidoeList from "../VideoComponents/VideoList";



const Favorite = () => {
    const {user, isPending} = useFetchUser('')
    const {favorites: netflix} =useFetchFavorite('netflix')
    const {favorites: amazon} =useFetchFavorite('amazon')
    const {favorites: disney} =useFetchFavorite('disney')
    const {favorites: hulu} =useFetchFavorite('hulu')
    const {favorites: paramount} =useFetchFavorite('paramount')
    const {favorites: hbo} =useFetchFavorite('hbo')
    const navigate = useNavigate();
    return ( 
        
        <div>
        { isPending && <div>Loading...</div> }
        {Object.keys(user).length !== 0?
        <>
            <h3>Favorite</h3>

            <h2>Amazon</h2>
            {  amazon &&   amazon !==undefined &&   amazon.map(video =>(
              < VidoeList key={video.video_id} video={video} platform=' amazon'/>
          ))}

             <h2>Disney</h2>
            {  disney &&   disney !==undefined &&   disney.map(video =>(
              < VidoeList key={video.video_id} video={video} platform=' disney'/>
          ))}
            <h2>Netflix</h2>
            { netflix &&  netflix !==undefined &&  netflix.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='netflix'/>
          ))}

            <h2>HBO</h2>
            { hbo &&  hbo !==undefined &&  hbo.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='hbo'/>
          ))}

            <h2>Hulu</h2>
            { hulu &&  hulu !==undefined &&  hulu.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='hulu'/>
          ))}

            <h2>Paramount</h2>
            { paramount &&  paramount !==undefined &&  paramount.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='paramount'/>
          ))}
           
           
        </>
        :
        <>
            <h1> Please Login</h1>
            <button onClick={() =>{ navigate('/Login')} }>Login</button>
                      
        </>
        }
   </div>
    );
}
 
export default Favorite;
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
            <h2>Netflix</h2>
            { netflix &&  netflix !==undefined &&  netflix.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='Netflix'/>
          ))}

            <h2>Hulu</h2>
            { hulu &&  hulu !==undefined &&  hulu.map(video =>(
              < VidoeList key={video.video_id} video={video} platform='hulu'/>
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
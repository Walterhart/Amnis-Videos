import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";
import useFetchFavorite from "../VideoComponents/useFetchFavorite";
import VidoeList from "../VideoComponents/VideoList";



const Favorite = () => {
    const {user, isPending} = useFetchUser('')
    const {favorites} =useFetchFavorite('')
    console.log(favorites)// favorites.video_id
    const navigate = useNavigate();
    return ( 
        
        <div>
        { isPending && <div>Loading...</div> }
        {Object.keys(user).length !== 0?
        <>

            <h3>Favorite</h3>
            <h2>Netflix</h2>
            { favorites && favorites !==undefined && favorites.map(favorite =>(
              < VidoeList key={favorite.video_id} video={favorite} platform='Netflix'/>
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
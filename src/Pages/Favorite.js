import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";


const Favorite = () => {
    const {user, isPending} = useFetchUser()
    const navigate = useNavigate();
    return ( 
        
        <div>
        { isPending && <div>Loading...</div> }
        {Object.keys(user).length !== 0?
        <>

            <h3>Favorite</h3>
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
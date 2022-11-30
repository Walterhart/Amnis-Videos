
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();

    function selectPlatform(platform) {
        console.log(platform)
        if(platform ==='Amazon')
        {
            navigate('/Amazon')
        }
        if(platform ==='Disney')
        {
            navigate('/Disney') 
        }
        if(platform ==='HBO')
        {
            navigate('/HBO') 
        }
    
        if(platform ==='Hulu')
        {
            navigate('/Hulu')
        }
        if(platform ==='Netflix')
        {
            navigate('/Netflix') 
        }
        if(platform ==='Paramount')
        {
            navigate('/Paramount') 
        }
    
      }
    return ( 
        <div className="buttons ">
            <button onClick={() => selectPlatform('Amazon')}>Amazon</button>
            <button onClick={() => selectPlatform('Disney')}>Disney</button>
            <button onClick={() => selectPlatform('HBO')}>HBO</button>  
            <button onClick={() => selectPlatform('Hulu')}>Hulu</button>
            <button onClick={() => selectPlatform('Netflix')}>Netflix</button>
            <button onClick={() => selectPlatform('Paramount')}>Paramount</button>  
        </div>
     );
}
 
export default HomePage;
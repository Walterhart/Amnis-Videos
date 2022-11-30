import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import useFetchFavorite from "./useFetchFavorite";
import { supabase } from "../config/supabaseClient";


const FavoriteControl = ({id, platform, user}) => {
  
    const {favorites, isPending } =useFetchFavorite(platform)
   
    const [isFound,setIsFound] = useState(false)

    const handleAdd  = async (e) =>{        
    const { data, error } = await supabase
    .rpc('add_favorite_'+platform, {
    user_num: user.id, 
    video_num: id
    })

    if (error) console.error(error)
    else{
      console.log('Added', data)
      setIsFound(true)}
    }
    const handleRemove  = async (e) =>{
        console.log('clicked')
        const { data, error } = await supabase
        .rpc('delete__'+platform+'_favorite', {
            user_num : user.id, 
            video_num: id
        })

        if (error) console.error(error)
        else{ 
          setIsFound(false)
        }

    }


    useEffect(() => {
        const fetchCheck = async () => {
            
            favorites.some(favorites => {
                
                if (favorites.video_id === id) {
                  
                  return setIsFound(true);
                      
                }   
                return false;
              });
                
        }
    
        if(favorites !=null)
        {
        fetchCheck()
        console.log(isFound)
        
        }

      }, [favorites,id,isFound])
    
    return ( 
      
        <div className="favorite-control">

          {isFound && isFound===true ?
            <> 
              <button onClick={() => handleRemove()} ><AiFillStar/></button>                 
            </>
            :
            <>
               <button onClick={() => handleAdd()} ><AiOutlineStar/></button>
            </>
            }
        </div>)
}
 
export default FavoriteControl;
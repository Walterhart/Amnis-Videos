import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const {user, isPending} = useFetchUser()
    const [profile,setProfile] =useState({})
    const navigate = useNavigate();
    

    async function signOutUser(){
        const { error } = await supabase.auth.signOut()
        if(error){
            console.log(error)
        }
        navigate('/Login')

    }
    
    return (  
        <div>
            {Object.keys(user).length !== 0?
            <>
                <h1> Profile: </h1>

                <h3>Email: {user.email}</h3>
                <button onClick={() => signOutUser()}>signout</button>
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
 
export default Profile;
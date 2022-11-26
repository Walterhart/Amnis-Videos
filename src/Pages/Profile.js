import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";
import useFetchProfile from "../VideoComponents/useFetechProfile";

const Profile = () => {
    const {profile, isPending} = useFetchProfile()
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
            {profile && profile !== undefined?
            <>
                <h1> Profile: </h1>

                <h3>Email: {profile.email}</h3>
                <h3>UserName: {profile.user_name} </h3>
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
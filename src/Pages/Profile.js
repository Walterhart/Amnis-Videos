import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import useFetchUser from "../VideoComponents/useFetchUser";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const {user, isPending} = useFetchUser()
    const [profile,setProfile] =useState('')
    const navigate = useNavigate();
  
    
    useEffect(()=>{
        const fetchProfile =async() =>{
            const { data, error } = await supabase
            .rpc('get_profile')
            .eq('id', user.id)
            .single()
                if(error){
                    console.log(error)
                 }
                if (data){
                    setProfile(data)
                    console.log('loaded')
                }
                
        }
        if(user !== undefined)
        {
         fetchProfile()
        }
       
    },[user])

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
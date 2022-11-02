import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../config/supabaseClient";

const Profile = () => {
    const [user,setUser] =useState({})
     const navigate = useNavigate();
    useEffect(() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    console.log(value.data.user)
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
    }, [])

    async function signOutUser(){
        const { error } = await supabase.auth.signOut()
        navigate('/Login')

    }
    return (  
        <div>
            {Object.keys(user).length !== 0?
            <>
                <h1> Made it: {user.email} </h1>
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
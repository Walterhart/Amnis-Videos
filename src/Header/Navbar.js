// Navbar component
// Link handle content changes in browser and will not send server quest

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";
import useFetchUser from "../VideoComponents/useFetchUser";


const Navbar = () => {
    const navigate = useNavigate()
    const {user, isPending} = useFetchUser()
    const [profile,setProfile] =useState('')
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
                    console.log('User fetched')
                }
                
        }
        if(user !== undefined)
        {
         fetchProfile()
        }
       
    },[user])

    async function signOutUser(){     
    let { error } = await supabase.auth.signOut()
        if(error){
            console.log(error)
            return
        }
        navigate('/')
    
    }
    
    
    return ( 
        <nav className="navbar">
            <h1> Amnis Videos </h1>
            <div className="links">
                <Link to= "/"> Home</Link>
                <Link to= "/Add-video"> Add Video</Link>
                <Link to= "/favorite"> Favorite</Link> 
                
                {profile && profile !== undefined ?
            <>
                <Link to= "/Profile">{profile.user_name} </Link>
                <button onClick={() => signOutUser()}>Logout</button>    
            </>
            :
            <>
                <Link to= "/Login"> Login</Link>
            </>
            }

                  
            </div>
        </nav>

     );
}
 
export default Navbar;
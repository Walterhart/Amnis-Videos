// Navbar component
// Link handle content changes in browser and will not send server quest

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../config/supabaseClient";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate();
    const [user,setUser] =useState({})
    useEffect(() =>{
        async function getUserData(){
            await supabase.auth.getUser().then((value) =>{
                if(value.data?.user){
                    setUser(value.data.user)
                }
            })
        }
        getUserData()
        if(user){
            console.log(user)
        }
    }, [])

    async function signOutUser(){     
    let { error } = await supabase.auth.signOut()
        if(error){
            console.log(error)
        }
        console.log("clicked")

    }
    
    
    return ( 
        <nav className="navbar">
            <h1> Amnis Videos </h1>
            <div className="links">
                <Link to= "/"> Home</Link>
                <Link to= "/Add-video"> Add Video</Link>
                <Link to= "/favorite"> Favorite</Link> 
                
                {Object.keys(user).length !== 0?
            <>
                <h1>  {user.email} </h1>
                <button onClick={() => signOutUser()}>signout</button>    
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
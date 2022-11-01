// Navbar component
// Link handle content changes in browser and will not send server quest

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "./config/supabaseClient";

const Navbar = () => {
    const [user,setUser] =useState({})
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
                <Link to= "/add-video"> Add Video</Link>
                <Link to= "/favorite"> Favorite</Link> 
                <Link to= "/Login"> Login</Link>
                <button onClick={() => signOutUser()}>signout</button>      
            </div>
        </nav>

     );
}
 
export default Navbar;
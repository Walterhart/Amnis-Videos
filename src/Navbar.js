// Navbar component
// Link handle content changes in browser and will not send server quest

import { Link } from "react-router-dom";

const Navbar = () => {
    
    return ( 
        <nav className="navbar">
            <h1> Amnis Videos </h1>
            <div className="links">
                <Link to= "/"> Home</Link>
                <Link to= "/add-video"> Add Video</Link>
                <Link to= "/favorite"> Favorite</Link> 
                <Link to= "/SignInOutTab"> Login</Link>      
            </div>
        </nav>
     );
}
 
export default Navbar;
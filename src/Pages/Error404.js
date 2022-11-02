// Componet for a page not found
import { Link } from "react-router-dom";

const Error404 = () => {
    return ( 
        <div className="Error404">
            <h1>Error 404</h1>
            <p> Page does not exist</p>
            <Link to = "/"> Click to go back to homepage</Link>
        </div>
     );
}
 
export default Error404;
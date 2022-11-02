import { Link } from "react-router-dom";

const VidoeList = ({video}) => {
    return (  
        <div className="video-list">
            <Link to={'/videos/' + video.show_id}> 
            <h2> title:{video.title}</h2>

            <p> {video.description}</p>
            <h3> {video.type}</h3>
            </Link>
            </div>
    );
}
 
export default VidoeList;
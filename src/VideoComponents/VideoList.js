import { Link } from "react-router-dom";

const VidoeList = ({video}) => {
    return (  
        <div className="video-list">
            <Link to={'/videos/' + video.show_id}> 
            <h2> {video.title}</h2>
            <p> {video.description}</p>
            <h2>{video.release_year}</h2>
            <h2> {video.type}</h2>
            </Link>
            </div>
    );
}
 
export default VidoeList;
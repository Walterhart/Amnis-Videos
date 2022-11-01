import { Link } from "react-router-dom";

const VidoeList = ({video}) => {
    return (  
        <div className="video-list">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
            <div className="video-button">

            <Link to={'/' + video.show_id}> xxx</Link>
            </div>
        </div>
    );
}
 
export default VidoeList;
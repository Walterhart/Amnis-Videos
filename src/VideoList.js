const VidoeList = ({video}) => {
    return (  
        <div className="video-list">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
        </div>
    );
}
 
export default VidoeList;
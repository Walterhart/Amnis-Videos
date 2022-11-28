const VideoFavoriteList = ({favorite,plateform}) => {
    return ( 
        <div className="video-list">
        <h2> {favorite.video_id}</h2>
        <h2> {favorite.id}</h2>
        </div>
     );
}
 
export default VideoFavoriteList;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const VideoPlayer = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/videos/${id}`);
        setVideo(res.data);
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };

    fetchVideo();
  }, [id]);

  if (!video) return <p>Loading...</p>;

  const isYouTubeLink = video.videoUrl.includes("youtube.com") || video.videoUrl.includes("youtu.be");

  return (
    <div className="video-player">
      <Link to="/">⬅ Back to Videos</Link>
      <h2>{video.title}</h2>
      {isYouTubeLink ? (
        <iframe
          width="100%"
          height="400"
          src={video.videoUrl.replace("watch?v=", "embed/")}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={video.title}
        ></iframe>
      ) : (
        <video width="100%" height="400" controls>
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
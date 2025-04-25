import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaYoutube, FaSearch, FaBars, FaUser } from "react-icons/fa";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  const fetchVideos = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/videos");
      setVideos(res.data);
    } catch (err) {
      console.error("Error fetching videos:", err);
    }
  };


  useEffect(() => {
    fetchVideos();
  }, []);

  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Top Bar */}
      <nav className="top-bar">
        <div className="logo-section">
            <FaBars/>
          <FaYoutube size={32} color="red" />
          <h1>YouTube</h1>
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>

        <Link to="/signin">
            <span><FaUser color="white"/></span>
          <button className="upload-btn">Sign In</button>
        </Link>
      </nav>

        <div className="container">
            <div className="inside">All</div>
            <div className="inside">Comedy</div>
            <div className="inside">Coding</div>
            <div className="inside">Music</div>
            <div className="inside">Education</div>
            <div className="inside">Gaming</div>
            <div className="inside">Metro</div>
        </div>

      <div className="video-list">
        <div className="videos-grid">
          {filteredVideos.map((video) => (
            <div key={video._id} className="video-card">
              <Link to={`/watch/${video._id}`}>
                <img
                  src={video.thumbnailUrl || "https://via.placeholder.com/320x180"}
                  alt={video.title}
                  className="thumbnail"
                />
                <h4>{video.title}</h4>
                <span style={{color: "white", textDecoration: "none"}}>{video.name} | </span>
                <span style={{color: "white"}}>Views: {video.views} | </span>
                <span style={{color: "white"}}> {video.time}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoList;

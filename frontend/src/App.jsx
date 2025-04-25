import { Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VideoList />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp/>} />    
      <Route path="/watch/:id" element={<VideoPlayer />} />
    </Routes>
  );
}

export default App;

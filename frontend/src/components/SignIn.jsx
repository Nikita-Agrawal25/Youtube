import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    setVideo({ [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/videos", video);
      navigate("/");
    } catch (err) {
      console.error("Sign in failed:", err);
    }
  };

  return (
    <div className="upload-form">
      <h2>Sign in your account</h2>
      <form onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
        />
        <input
            type="password"
            name="Password"
            placeholder="Password"
            onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="account"> Don't have account? Sign up for free </div>
    </div>
  );
};

export default SignIn;

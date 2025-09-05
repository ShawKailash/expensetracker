import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    // if (username.length < 3) {
    //   setError("Username must be at least 3 characters long");
    //   return;
    // }
    // if (password.length < 8) {
    //   setError("Password must be at least 8 characters long");
    //   return;
    // }
    // setUsername("");
    // setPassword("");
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.username === username &&
      savedUser.password === password
    ) {
      navigate("/login/home");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center border bg-white rounded-2xl shadow-lg w-80">
        <form onSubmit={handleSignup}>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 border rounded-xl mt-10 mb-4"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 border rounded-xl mb-4"
              placeholder="Password"
              required
            />
          </div>
          <button className="border rounded-xl px-4 py-2 mb-4 bg-blue-600 text-white">
            Sign in
          </button>
        </form>
        <p className="mb-10">
          Not a member?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Login;

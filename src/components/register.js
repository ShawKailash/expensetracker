import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();

    // if (username.length < 3) {
    //   setError("Username must be at least 3 characters long");
    //   return;
    // }
    // if (!email.includes("@")) {
    //   setError("Enter a valid email");
    //   return;
    // }
    // if (password.length < 8) {
    //   setError("Password must be at least 8 characters long");
    //   return;
    // }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem("user", JSON.stringify({ username, email, password }));

    alert("Registration successful! Please login.");
    navigate("/login");
    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setConfirmPassword("");
  };
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-col items-center justify-center border bg-white rounded-2xl shadow-lg w-96">
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border rounded-xl mb-4 mb-4"
              placeholder="email"
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
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="px-4 py-2 border rounded-xl mb-4"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div>{error && <p className="text-red-500">{error}</p>}</div>
          <button className="border rounded-xl px-4 py-2 mb-4 bg-blue-600 text-white">
            Sign in
          </button>
        </form>
        <p className="mb-10">
          Already Register?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Register;

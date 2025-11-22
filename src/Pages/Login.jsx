import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();



    // Hard-coded user (You can change it)
    const USER = {
      username: "admin",
      password: "12345",
    };

    // Check credentials
    if (form.username === USER.username && form.password === USER.password) {
      localStorage.setItem("auth", "true");
      navigate("/"); // redirect to home page
    } else {
      setError("Invalid username or password!");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-xl shadow-xl w-96">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 mb-4 rounded bg-gray-700 text-white placeholder-gray-400 outline-none"
          />

          {error && (
            <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white p-3 rounded font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

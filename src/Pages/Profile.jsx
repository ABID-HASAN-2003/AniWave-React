import React from "react";
import { useNavigate } from "react-router-dom";
import { MdPerson } from "react-icons/md"; // profile/people type icon

export default function Profile() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("userName"); // optional
  const userEmail = localStorage.getItem("userEmail"); // optional

  const handleDeleteProfile = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    navigate("/");
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-900 p-4">
      
      {/* Card Layout – center aligned, rounded corners, shadow */}
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md flex flex-col items-center">
        
        {/* Avatar/Icon – Profile icon inside circular bg with shadow */}
        <div className="bg-gray-700 rounded-full p-5 mb-6 shadow-lg">
          <MdPerson size={64} className="text-indigo-400" />
        </div>

        {/* User Details – name, ID, optional email */}
        <h2 className="text-3xl font-bold mb-2">{userName || "Anonymous User"}</h2>
        <p className="text-gray-400 mb-2">
          User ID: <span className="text-white">{userId}</span>
        </p>
        {userEmail && (
          <p className="text-gray-400 mb-4">
            Email: <span className="text-white">{userEmail}</span>
          </p>
        )}

        {/* Buttons – Delete (red), Edit (indigo), hover + scale effect */}
        <div className="flex gap-4 mt-6 w-full">
          <button
            onClick={handleDeleteProfile}
            className="flex-1 bg-red-600 hover:bg-red-700 p-3 rounded-lg font-semibold transition-all shadow-md hover:scale-105"
          >
            Delete Profile
          </button>
          <button
            onClick={() => navigate("/edit-profile")}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg font-semibold transition-all shadow-md hover:scale-105"
          >
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}

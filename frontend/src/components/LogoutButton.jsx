import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear cache (if necessary)
        caches.keys().then(function(names) {
            for (let name of names) caches.delete(name);
        });

        // Clear local storage
        localStorage.clear();

        // Redirect to the home page
        navigate("/"); // Replace with your actual home page URL
    };

    return (
        <button onClick={handleLogout} className="h-10 w-14  bg-slate-200 flex justify-center items-center mt-1 mr-2 rounded-lg shadow-md hover:bg-slate-400 transition duration-300 ease-in-out">
            <div className="flex flex-col justify-center h-full text-m">
                Logout
            </div>
        </button>
    );
};

export default LogoutButton;

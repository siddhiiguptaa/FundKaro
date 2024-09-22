import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"; // Import your LogoutButton component

export const AppBar = () => {
    return (
        <div className="shadow h-14 flex justify-between">
            <Link to="/">
                <div className="flex flex-col justify-center h-full ml-4 font-bold text-xl">
                    FundKaro App
                </div>
            </Link>
            <div className="flex">
                <div className="flex flex-col justify-center h-full mr-4">
                    Hello
                </div>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-m">
                        You
                    </div>
                </div>
                <LogoutButton /> {/* Include the LogoutButton component */}
            </div>
        </div>
    );
};


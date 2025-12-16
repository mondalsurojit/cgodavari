import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import notFoundImg from "../assets/404_light.png";

const NotFound = () => {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-20">
            <img src={notFoundImg}
                alt="404 Not Found"
                className="w-60 h-44 sm:w-md sm:h-80 mb-2"
            />
            <Link
                to="/"
                className="flex items-center gap-2 px-5 py-2 mt-5 mb-20 
                           bg-gray-200 hover:bg-gray-300 text-gray-900 
                           dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white 
                           rounded-2xl transition-colors text-sm">
                <ArrowLeft size={18} /> Go Back Home
            </Link>
        </main>
    );
};

export default NotFound;
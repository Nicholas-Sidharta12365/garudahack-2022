import React from "react";
import {Link} from 'react-router-dom';



function Profile() {
    return (
      <div className="flex">
        <div className={`w-25 p-4 pt-16 h-screen bg-dark-purple`}>
            <div className="flex flex-col space-y-10">
                <Link to="/home">
                    <button className="py-2 px-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                        Home
                    </button>
                </Link>
                
                <Link to="/profile">
                    <button className="py-2 px-3.5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                        Profile
                    </button>
                </Link>
                    
                <Link to="/chat">
                    <button className="py-2 px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                        Chat
                    </button>
                </Link>

                <Link to="/logout">
                    <button className="py-2 px-3 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                        Logout
                    </button>
                </Link>
                
                
            </div>
            
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            <h1>Your Profile</h1>
            <input type="text" />
        </div>
      </div>
    );
  }
  
  export default Profile;
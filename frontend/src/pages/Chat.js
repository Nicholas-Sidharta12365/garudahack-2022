import React from "react";
import {Link} from 'react-router-dom';
import Footer from '../components/Footer';


function Chat() {
    return (
      <div className="flex w-screen">
        <div className={`w-30 p-4 pt-16 h-screen bg-dark-purple`}>
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
        <div className="pr-80 pl-5 pt-5 text-2xl font-semibold">
            <h1>Chat Page</h1>

            <br />
            <p className="text-sm">Hello World</p>
            <Link to="/mainvideo">
                <button>Video</button>
            </Link>
                
            
            
        </div>
        <Footer />
      </div>
    );
  }
  
  export default Chat;
import React from "react";
import {Link} from 'react-router-dom';
import Image from '../components/image'
import Logout from "../components/logout";

function Profile() {
    return (
      <div className="flex">
        <div className={`w-25 p-4 pt-16 h-screen bg-dark-purple`}>
            <div className="flex flex-col space-y-10">
                <Link to="/home">
                    <button className="py-2 px-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  mr-2 mb-2">
                        Home
                    </button>
                </Link>
                
                <Link to="/profile">
                    <button className="py-2 px-3.5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  mr-2 mb-2">
                        Profile
                    </button>
                </Link>
                    
                <Link to="/chat">
                    <button className="py-2 px-5 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm  mr-2 mb-2">
                        Chat
                    </button>
                </Link>

                <Logout/>
            </div>
            
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen font-roboto grid grid-cols-1 place-content-start bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="text-center text-4xl font-bold text-white bg-blue-900 p-4">Your Profile</div>
            <div className=" bg-white pt-8">
                <Image source="https://i.ytimg.com/vi/R39M9WtdKPg/maxresdefault.jpg"/>
            </div>
            <div className="grid grid-cols-2 px-16 pt-8 pb-8 bg-white">
                <hr className="border border-black border-t-4 w-11/12"></hr>
                <hr className="border border-black border-t-4 w-11/12 place-self-end"></hr>
            </div>
            <div className="grid grid-cols-1 px-16 pb-10 bg-white">
                <div className="font-semibold">
                    <div className="">Name</div>
                    <div className="border mt-2 border-black p-4 rounded-lg">ooga booga</div>
                </div>
                <div className="font-semibold mt-4">
                    <div className="">Session Count</div>
                    <div className="border mt-2 border-black p-4 rounded-lg">5</div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Profile;
import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Logout from "../components/logout";
import Therapists from "../components/therapists";


function Home() {
    const [therapists, setTherapists] = useState([])

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("access-token")}` }
    };

    useEffect(() => {
        axios.get(`http://localhost:5000/availableTherapist`, config).then((res) => {
            setTherapists(res.data.therapists)
        })
    }, [])

    return (
      <div className="flex">
        <div className={`w-25 p-4 pt-16 h-screen bg-dark-purple`}>
            <div className="flex flex-col space-y-10">
                <button className="py-2 px-4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center mr-2 mb-2">
                    Home
                </button>
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
                
                <Logout/>
                
                
            </div>
            
        </div>
        <div className="p-7 text-2xl font-semibold flex-1 h-screen font-roboto grid grid-cols-1 place-content-start bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="text-center text-4xl font-bold text-white bg-[#fa1195] p-4 mx-4 rounded-lg">Find Your Therapist</div>
            <div className="grid grid-cols-1 mt-4 overflow-y-scroll px-4">
                <div className='border-none rounded-lg bg-[#fa1195] grid grid-cols-3 font-roboto p-4 mt-2'>
                    <div className="text-white place-self-center">Name</div>
                    <div className="text-white place-self-center">Status</div>
                    <div className="place-self-center">
                        <div className="text-white place-self-center">Start Talking</div>
                    </div>
                </div>

                {
                    therapists.map((therapist) => {
                        return (
                            <Therapists key={therapist.id} name={therapist.name} status="active" cols="3" />
                        )
                    })
                }
            </div>
        </div>
      </div>
    );
  }
  
  export default Home;
import React from 'react';
import {Link} from 'react-router-dom';
import RegisterUser from './registerUser';

const landing = () => {
  return (
    <div className='font-roboto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full bg-scroll'>
        <div className="bg-black grid grid-cols-2 py-6 px-16">
            <div className="text-xl text-white">LOGO</div>
            <button className="text-right text-white">Sign In</button>
        </div>
        <div className="grid grid-cols-2 p-8 gap-4">
            <div className="place-self-center">
              <span className="text-6xl text-white">Get your mental health checked with our mental health professionals</span>
              <div className="text-3xl mt-8 text-black">Join us by a click of a button</div>
              <Link to="/login">
              <button className="place-self-center border-2 bg-blue-700 text-white rounded-full py-3 px-12 border-white mt-8" >JOIN US</button>
              </Link>
             

            </div>
            <img src="https://media.istockphoto.com/photos/doctor-writing-a-medical-prescription-picture-id1319031310?k=20&m=1319031310&s=612x612&w=0&h=wy85xfbBKEtnF0XNVKt1v7DSvUBybjBUsJbrJNkskTY=" alt="" className="rounded-lg w-full" />
        </div>
        <div className="grid grid-cols-2 py-8 px-2">
          <hr className='w-11/12 place-self-start border-t-4'></hr>
          <hr className='w-11/12 place-self-end border-t-4'></hr>
        </div>
        <div className="grid grid-cols-1 py-8 px-4">
          <div className="text-4xl text-center text-white font-bold">ABOUT US</div>
          <div className="text-white text-center m-8 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet magna at nisi condimentum iaculis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sollicitudin mattis arcu, eu faucibus nisi vestibulum quis. Cras at semper ante. Aliquam erat volutpat. Curabitur vitae imperdiet ante. Aenean elementum commodo diam non tristique. Nulla vel felis et justo pulvinar dapibus. Morbi vehicula ex quam, sed luctus sapien feugiat at. Pellentesque diam nisi, convallis nec pharetra sit amet, aliquet vel neque. Curabitur imperdiet pellentesque turpis nec lacinia. Pellentesque at dolor in odio accumsan laoreet. Nulla id mi quis sem lobortis eleifend eget non leo. Cras fringilla dolor at consectetur porttitor. Cras blandit mi quis ante elementum, ac iaculis orci condimentum. Integer varius massa ac sem hendrerit mattis. Aliquam vel urna diam. Ut justo justo, tempus sed dui eget, tristique tempus augue. Nullam venenatis orci ut odio dapibus, in blandit mi accumsan. Integer facilisis posuere arcu ac bibendum. In ac ipsum blandit, iaculis ante sed, vehicula quam.</div>
        </div>
        <div className="grid grid-cols-2 py-8 px-2">
          <hr className='w-11/12 place-self-start border-t-4'></hr>
          <hr className='w-11/12 place-self-end border-t-4'></hr>
        </div>
        <div className="grid grid-cols-1 py-8 px-4">
        <div className="text-4xl text-center text-white font-bold">WATCH OUR DEMO</div>
        <div className="place-self-center m-16"><iframe width="560" height="315" src="https://www.youtube.com/embed/34Ig3X59_qA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
        <div className="bg-black p-16 grid grid-cols-2">
          <div className="text-white font-semibold text-2xl">
            <img className='w-12' src="https://garudahacks.com/img/logo.png" alt="" />
            <span className="">&copy;GarudaHack Team</span>
          </div>
          <div className="text-white">
            <span className="text-xl">Made with:</span>
            <div className="grid grid-cols-2 mt-4">
              <img className='w-12 h-12' src="https://www.twilio.com/assets/icons/twilio-icon-512_maskable.png" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default landing
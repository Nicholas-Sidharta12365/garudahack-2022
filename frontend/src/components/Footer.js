import React from "react";
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="absolute inset-x-20 bottom-0 h-20">
        <form className="inline-block align-middle ml-16">
            <input className="border-solid border-2 border-sky-500 shadow px-20 py-2 rounded-full" type="text" />
            <button type="submit" className="border rounded-full bg-blue-200 p-2">Send</button>
        </form>
    </div>
  );
}

export default Footer;
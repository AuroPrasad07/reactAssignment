import React from 'react'
import './Navbar.css'
import { BsClipboardCheckFill } from "react-icons/bs";

const navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
            <li><BsClipboardCheckFill /> OVERALL SUMMARY</li>
            <li><BsClipboardCheckFill /> GUIDED PATH PROGRESS</li>
            <li><BsClipboardCheckFill /> ASSIGNMENT PROGRESS</li>
        </ul>
      </div>
    </div>
  )
}

export default navbar

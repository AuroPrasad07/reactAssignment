import React, { useState } from 'react'
import Navbar from '../Navbar/navbar'
import './Main.css'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
// import { FaAngleUp } from "react-icons/fa6";
import { BiMessageRounded } from "react-icons/bi";
import StudentImage from '../StudentImage/StudentImage';

const Main = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='main'>
      <div className="nav">
        <Navbar/>
      </div>
      <div className="black-border">
      <div className="main-container">
        <ul>
          <li>
            <div className="upper-part">
            <div className="part-1">
              <div className="assignment-time">
                <h4>Assigned on</h4>
                <p>06 Dec 2023</p>
              </div>
              <div className="assignment-time">
                <h4>Due by</h4>
                <p>16 Dec 2023</p>
              </div>
            </div>
            <div className="part-2">
              <h2>Unit Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit earum omnis eius placeat voluptate.</p>
            </div>
            <div className="part-3">
              <div className="bar"></div>
              <button>COMPLETED</button>
            </div>
            <div className="icon">
              { menuOpen ? <FaAngleUp onClick={() => setMenuOpen(!menuOpen)}/> : <FaAngleDown onClick={() => setMenuOpen(!menuOpen)}/> }
            </div>
            </div>
            
            <div className={menuOpen ? "bottom-part display" : "bottom-part"}>
              <div className="tasks">
                <p><BiMessageRounded/> TASK 1- TING TONG</p>
                <p><BiMessageRounded/> TASK 2- PREPARATIONS</p>
                <p><BiMessageRounded/> TASK 3</p>
              </div>
              <div className="progress-bar">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </div>
              <div className="pupils">
                <StudentImage/>
                <StudentImage/>
                <StudentImage/>
              </div>
            </div>
          </li>
          <li>
            <div className="upper-part">
            <div className="part-1">
              <div className="assignment-time">
                <h4>Assigned on</h4>
                <p>06 Dec 2023</p>
              </div>
              <div className="assignment-time">
                <h4>Due by</h4>
                <p>16 Dec 2023</p>
              </div>
            </div>
            <div className="part-2">
              <h2>Unit Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit earum omnis eius placeat voluptate.</p>
            </div>
            <div className="part-3">
              <div className="bar"></div>
              <button>COMPLETED</button>
            </div>
            <div className="icon">
              <FaAngleDown/>
            </div>
            </div>
          </li>
          <li>
            <div className="upper-part">
            <div className="part-1">
              <div className="assignment-time">
                <h4>Assigned on</h4>
                <p>06 Dec 2023</p>
              </div>
              <div className="assignment-time">
                <h4>Due by</h4>
                <p>16 Dec 2023</p>
              </div>
            </div>
            <div className="part-2">
              <h2>Unit Name</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit earum omnis eius placeat voluptate.</p>
            </div>
            <div className="part-3">
              <div className="bar"></div>
              <button>COMPLETED</button>
            </div>
            <div className="icon">
              <FaAngleDown/>
            </div>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Main

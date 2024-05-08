import React, { useState } from 'react';
import './Teacher.css';
import teacher_img from '../../assets/teacher.jpg';
import { FaFile } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import StudentImage from '../StudentImage/StudentImage';
import student3 from '../../assets/student3.jpg'

const Teacher = () => {
  const [studentOpen, setStudentOpen] = useState(true);

  return (
    <>
    <div className={studentOpen ? "outer-container display-content" : "outer-container"}>
      <div className="inner-container">
        <div className="title">
          <h1>Your Students</h1>
          <button onClick={()=> setStudentOpen(!studentOpen)}>X</button>
        </div>
        <div className="students-contr">
         <div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div>
         <div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div><div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div><div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div><div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div><div className="students-about">
          <div className="students-detail">
            <img src={student3} alt="student's image" />
            <h3>Kashish Jain</h3>
          </div>
          <div className="achievements">
            <div className="achieved">
                <h2>125</h2>
                <p>Freados</p>
            </div>
            <div className="achieved">
                <h2>6</h2>
                <p>Streaks</p>
            </div>
            <div className="achieved">
                <h2>100</h2>
                <p>Reading mins</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </div>

    <div className='container '>
      <div className="teacher-details">
        <img src={teacher_img} alt="teacher's image" />
        <h3>Teacher's Name</h3>
        <p>School Name</p>
        <div className="class">
            <h5><FaFile color='purple'/> Grade 3</h5>
            <button>Section <FaAngleDown/></button>
        </div>
      </div>
      <div className="student-details">
        <div className="students">
            <p><HiUserGroup/> MY STUDENTS</p>
            <a onClick={()=>setStudentOpen(!studentOpen)}>View All</a>
        </div>
        <StudentImage/>
        <div className="students">
            <p><HiUserGroup/> MY STUDENTS</p>
            <a href=''>View All</a>
        </div>
        <StudentImage/>
      </div>
    </div>
    </>
  )
}

export default Teacher

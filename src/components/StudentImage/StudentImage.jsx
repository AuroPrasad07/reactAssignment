import React from 'react'
import './StudentImage.css'
import student3 from '../../assets/student3.jpg';

const StudentImage = () => {
  return (
    <div className="student-image">
        <img src={student3} alt="student-image" />
        <img src={student3} alt="student-image" />
        <img src={student3} alt="student-image" />
        <img src={student3} alt="student-image" />
    </div>
  )
}

export default StudentImage

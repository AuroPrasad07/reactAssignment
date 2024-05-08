import React from 'react'
import './Students.css'
import student3 from '../../assets/student3.jpg'

const Students = () => {
  const [studentOpen, setStudentOpen] = useState(false);

  return (
    <div className='outer-container'>
      <div className="inner-container">
        <div className="title">
          <h1>Your Students</h1>
          <button >X</button>
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
  )
}

export default Students

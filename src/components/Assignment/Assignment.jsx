import React from 'react'
import './Assignment.css'

const Assignment = () => {
  return (
    <div className='assignment-container'>
      <div className="assignment-today">
        <h1>DUE TODAY</h1>
        <h2>Assignment 1</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>VIEW</button>
      </div>
      <div className="assignments">
        <h1>ASSIGNMENTS</h1>
        <div className="assignment">
            <div className="head">
                <button>EVENT</button>
                <p>4/6/24</p>
            </div>
            <h2>Monthly Talent Show Postponed</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut</p>
        </div>
        <div className="assignment">
            <div className="head">
                <button id='holiday'>HOLIDAY</button>
                <p>4/6/24</p>
            </div>
            <h2>Upcoming Holiday</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut</p>
        </div>
        <div className="assignment">
            <div className="head">
                <button>EVENT</button>
                <p>4/6/24</p>
            </div>
            <h2>Parent Teacher Meeting</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut</p>
        </div>
      </div>
    </div>
  )
}

export default Assignment

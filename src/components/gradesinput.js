import React from 'react'
import './gradesinput.css'


const Gradesinput = (props) => (
    <div className = 'gradesinput'>
        <h1> Enter Student Details</h1>
       Name: <input type="text" placeholder="Student Name"></input> <br/>
       S.. N.  : <input type="Number" placeholder="social Number"></input> <br/>
       Grade: <input type="Number" placeholder="History Grade"></input><br/>
       Grade:<input type="Number" placeholder="Sport"></input><br/>
       Grade: <input type="Number" placeholder="Calculus"></input><br/>
       Grade: <input type="text" placeholder="Girlfriend"></input><br/>
       Email: <input type="text" placeholder="Email"></input><br/>
       Weed : <input type="text" placeholder="Sativa / Indica"></input><br/>
        <br />
        submit button

    </div>

)

export default Gradesinput
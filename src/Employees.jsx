import React from 'react'

import femaleProfile from "./images/femaleProfile.jpeg"
import maleProfile from "./images/maleProfile.jpeg"


const Employees = ({employees,selectedTeam,handleCardClick,handleTeamChange}) => {
  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
          <div className='col-8'>
            <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamChange}>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="Amazon">Amazon</option>
              <option value="Apple">Apple</option>
            </select>
          </div>
        </div>

        <div className='row justify-content-center mt-3 mb-3'>
          <div className='col-8'>

            <div className='card-collection '>
              { employees.map( (employee) => (
                <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor :"pointer"}}onClick={handleCardClick}>
                  {
                    (employee.gender === "male")? <img src={maleProfile} className="card-img-top" />
                                                : <img src={femaleProfile} className="card-img-top" />
                  }
                  <div className='card-body'>
                    <h5 className='card-title'>FullName :{employee.fullName}</h5>
                    <p className='card-text'><b>Designation:</b> {employee.designation}</p>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
       
        
      
    
    </main>
  )
}

export default Employees
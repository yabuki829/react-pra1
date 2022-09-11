import React from 'react'
import TeamMembers from './TeamMembers'


import Teams from './Teams'


const Employees = ({employees,selectedTeam,handleCardClick,handleTeamChange}) => {
  return (
    <main className='container'>
        <div className='row justify-content-center mt-3 mb-3'>
          <div className='col-8'>
           <Teams selectedTeam = {selectedTeam} handleTeamChange = {handleTeamChange}/>
          </div>
        </div>

        <div className='row justify-content-center mt-3 mb-3'>
          <div className='col-8'>
            <div className='card-collection'>
              <TeamMembers employees={employees} handleCardClick={handleCardClick} selectedTeam={selectedTeam}/>
            </div>
          </div>
        </div>
       
        
      
    
    </main>
  )
}

export default Employees
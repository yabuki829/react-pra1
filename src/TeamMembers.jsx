import React from 'react'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = ({employees, handleCardClick,selectedTeam}) => {
  return (
       employees.map((employee) => {
          return (  
            <div> 
              <TeamMemberCard employee={employee} handleCardClick={handleCardClick} selectedTeam={selectedTeam} />
            </div> 
            
        
          )
         
        })
   
  )
}

export default TeamMembers
import React from 'react'

const Teams = ({selectedTeam,handleTeamChange}) => {
  return (
    <select className="form-select form-select-lg " value={selectedTeam} onChange={handleTeamChange}>
        <option value="Google">Google</option>
        <option value="Facebook">Facebook</option>
        <option value="Amazon">Amazon</option>
        <option value="Apple">Apple</option>
    </select>
  )
}

export default Teams
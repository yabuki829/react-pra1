import React from 'react'
import { useState } from 'react'

const Team = ({employees,selectTeam,setTeam}) => {

  const [groupedEmployees,setGroupedData] = useState(groupTeamMenbers())
  

  function groupTeamMenbers(){
    console.log("ここだよ",employees)
    
    var teams = []

    var googleMenber = employees.filter((employee) => employee.teamName === 'Google');
    var google = { team: 'Google', members: googleMenber, collapsed: selectTeam === 'Google' ? false : true };
    teams.push(google);

   
    var amazonMenber = employees.filter((employee) => employee.teamName === "Amazon")
    var amazon = { team: "Amazon", members: amazonMenber,collapsed: selectTeam === "Amazon" ? false : true }
    teams.push(amazon)

    var facebookMenber = employees.filter((employee) => employee.teamName === "Facebook")
    var facebook = { team: "Facebook", members:facebookMenber,collapsed: selectTeam === "Facebook" ? false : true }
    teams.push(facebook)

    var appleMenber = employees.filter((employee) => employee.teamName === "Apple")
    var apple = { team: "Apple", members:appleMenber,collapsed: selectTeam === "Apple" ? false : true }
    teams.push(apple)

    return teams;

  }
  function handleTeamClick(event) {
    //idにチームを設定している　Google や　Apple
    // groupedData.team === event.currentTarget.id が同じであれば  !groupedData.collapsed つまり　collapsedを反対にする
    var newGroupedData = groupedEmployees.map((groupedData) => groupedData.team === event.currentTarget.id ? { ...groupedData, collapsed: !groupedData.collapsed } : groupedData);
    setGroupedData(newGroupedData);
    setTeam(event.currentTarget.id);

  }
  return (
    <main className='container'>
      {
        groupedEmployees.map((item) => {
          return (
            <div key={item.team} className="card mt-2" style={{ cursor: "pointer" }}>
              <h4 id={item.team} className="card-header text-secondary bg-white" onClick={handleTeamClick}>
                Team Name: {item.team}
              </h4>
              <div id={"collapse_" + item.team} className={item.collapsed === true ? "collapse" : ""}>
                <hr />
                {item.members.map((member) => {
                  return (
                    
                    <div key={member.id} className="mt-2">
                     
                      <h5 className="card-title mt-2">
                        <span className="text-dark"><b>Full Name:</b> {member.fullName}</span>
                      </h5>
                      <p className="card-text text-dark mt-2">
                        <b>Designation:</b> {member.designation}
                      </p>
                    </div>
                  );
                })}
              </div>
              <hr />
            </div>
          );
        })
      }
      
     
    </main>
   
  )
}

export default Team
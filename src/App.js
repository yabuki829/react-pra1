
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Employees from './Employees';
import { useState } from 'react'

function App() {
  const [selectedTeam,setTeam] = useState("Apple")


  const [employees,setEmployees] = useState([{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript エンジニア",
    gender: "male",
    teamName: "Google"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node エンジニア",
    gender: "female",
    teamName: "Google"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java エンジニア",
    gender: "female",
    teamName: "Google"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React エンジニア",
    gender: "male",
    teamName: "Facebook"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet エンジニア",
    gender: "male",
    teamName: "Facebook"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA　エンジニア",
    gender: "female",
    teamName: "Facebook"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular エンジニア",
    gender: "male",
    teamName: "Amazon"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API エンジニア",
    gender: "female",
    teamName: "Amazon"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ エンジニア",
    gender: "female",
    teamName: "Amazon"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python エンジニア",
    gender: "male",
    teamName: "Apple"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue エンジニア",
    gender: "male",
    teamName: "Apple"
  },

  {
    id: 12,
    fullName: "Shodai Yabuki",
    designation: "iOS エンジニア",
    gender: "male",
    teamName: "Apple"
  }])

  function handleTeamChange(event){
    setTeam(event.target.value)
  }
  function handleCardClick(event){
    console.log(selectedTeam, parseInt(event.currentTarget.id))

    //   A ? B ? a :b : c : d
    //   AがFalseの場合にdの処理をする
    //   AがTrueの場合はBの分岐に行く
    //   BがTrueの場合にaの処理をする
    //   BがFalseの場合にcの処理をする

    const transformEmployees = employees.map((employee) => employee.id ===  parseInt(event.currentTarget.id)
                                            ? (employee.teamName === selectedTeam) 
                                            ? {...employee,teamName:""}
                                            :{...employee,teamName:selectedTeam}
                                            :employee)
                      
    setEmployees(transformEmployees)

    
  }
  return (
   <div>
    <Header/ >
    <Content/ >
    <Employees employees={employees} selectedTeam={selectedTeam} handleCardClick={handleCardClick} handleTeamChange={handleTeamChange}/>
    <Footer/ >
   </div>
  );
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import Employees from './Employees';
import { useState,useEffect } from 'react'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Team from './Team';
import Nav from './Nav';
import NotFound from './Notfound';

function App() {
  const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem("selectTeam")) || "Google")


  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem("employeeList")) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript",
    gender: "male",
    teamName: "Google"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node",
    gender: "female",
    teamName: "Google"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java",
    gender: "female",
    teamName: "Google"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React",
    gender: "male",
    teamName: "Facebook"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet",
    gender: "male",
    teamName: "Facebook"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "Facebook"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular ",
    gender: "male",
    teamName: "Amazon"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API",
    gender: "female",
    teamName: "Amazon"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++",
    gender: "female",
    teamName: "Amazon"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python",
    gender: "male",
    teamName: "Apple"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue",
    gender: "male",
    teamName: "Apple"
  },

  {
    id: 12,
    fullName: "Shodai Yabuki",
    designation: "iOS",
    gender: "male",
    teamName: "Apple"
  }])

  useEffect(() =>{
    //localにemployeesを保存する
    console.log("employeeを変更しました")
    localStorage.setItem("employeeList",JSON.stringify(employees))
  },[employees])
  useEffect(() =>{
    //localにemployeesを保存する
    console.log("選択を変更しました")
    localStorage.setItem("selectTeam",JSON.stringify(selectedTeam))
  },[selectedTeam])

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
    <Router>
      <Nav/>
      <Header selectedTeam={selectedTeam} teamMenberCount={employees.filter((employee) => employee.teamName === selectedTeam).length }/ >
      <Routes>
        <Route path='/' element={
              <Employees  employees={employees} 
              selectedTeam={selectedTeam} 
              handleCardClick={handleCardClick}
              handleTeamChange={handleTeamChange}/>}>
        </Route>
        <Route path='/team' element={<Team employees={employees} 
                                          selectTeam={selectedTeam} 
                                          setTeam={setTeam}/>}>
        </Route>
        <Route path='/*' element={<NotFound/ >}>
        </Route>
      </Routes>
     
      
      <Footer/ >
    </Router>
    
   </div>
  );
}

export default App;

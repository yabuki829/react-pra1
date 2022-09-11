import React from 'react'

const Header = ({selectedTeam,teamMenberCount}) => {
  return (
    <header className='container'>
      <div className='row justify-content-center'>
        <div className='col-8'>
          <h1 className='mt-4 p5'>{selectedTeam} は{teamMenberCount} 人います</h1>
        </div>
      </div>
       
    </header>
  )
}

export default Header

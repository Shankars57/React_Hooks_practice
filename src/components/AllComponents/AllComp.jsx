import React from 'react'
import Weather from '../conditionals/Weather'
import UserOrAdmin from '../conditionals/UserOrAdmin'
import TimeOfDay from '../conditionals/TimeOfDay'

const AllComp = () => {
  let hours = new Date().getHours();
  return (
    <div>
    
      <Weather/>
      <UserOrAdmin invalid={true}/>
      <TimeOfDay time={hours}/>
    </div>
  )
}

export default AllComp

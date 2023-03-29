import React from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'

function Calendar() {
  return <div>
    <NavBar/>
    <div className='wrapper'>
      <SideBar/>
      <div className='max-w-max'>
        <h1 className="pl-5 pt-3 text-3xl text-blue-900 font-semibold">Calendar View</h1>
        <div className="pt-3 pl-5 grid grid-cols-7 gap-2.5 "> 
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Monday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Tuesday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Wednesday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Thursday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Friday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Saturday</div>
          <div className="bg-blue-500 h-10 w-56 rounded-md p-2">Sunday</div>
        </div>
        <div className="pt-3 pl-5 grid grid-cols-7 gap-2.5 ">
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">1</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">2</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">3</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">4</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">5</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">6</div>
          <div className="bg-blue-300 h-36 w-56 rounded-md p-2">7</div>
        </div>
      </div>
    </div>
  </div>
}

export default Calendar

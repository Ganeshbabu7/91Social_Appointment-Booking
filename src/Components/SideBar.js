import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return<div className="xl:w-60 md:w-48 sm:w-40 min-h-screen text-xl font-extrabold bg-blue-900 text-blue-50 font-mono text-left py-2">
      <ul>
        <Link to='/createappointment'><li className="px-5 pt-4 font-sans text-base font-normal">
          <i className="fa-solid fa-plus pr-3" ></i>
            Create Appointment
        </li>
        </Link>
        <Link to='/listview'><li className="px-5 pt-4 font-sans text-base font-normal">    
          <i className="fa-solid fa-list pr-3"></i>
            List View
        </li>
        </Link>
        <Link to="/calendarview"><li className="px-5 pt-4 font-sans text-base font-normal">
          <i className="fa-solid fa-calendar pr-3"></i>
            Calendar View
        </li>
        </Link>
      </ul>
    </div>
}

export default SideBar

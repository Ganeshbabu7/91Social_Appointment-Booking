import React from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
// import { useSelector, useDispatch } from 'react-redux'
// import { deleteAppointment } from '../Redux/appointmentReducer'
import { useNavigate } from 'react-router-dom'

function List() {
  // let dispatch = useDispatch()
  let navigate = useNavigate()
  let appointments = [...JSON.parse(localStorage.getItem('appointments'))]
  let removeAppointments = (i)=>{
    console.log(i);
    console.log(appointments[i]);
    localStorage.removeItem(appointments[i])
  }
  // let appointments = useSelector((state)=>state.appointment.appointments)

  return <div >
    <NavBar/>
    <div className='wrapper'>
      <SideBar/>
      <div>  
        <h1 className="pl-5 pt-3 text-3xl text-blue-900 font-semibold">List View</h1>
        <div className='pt-4 pl-5'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className="border px-4 py-2 w-auto">S.No</th>
                <th className="border px-4 py-2 w-auto">Date</th>
                <th className="border px-4 py-2 w-auto">Time</th>
                <th className="border px-4 py-2 w-auto">Client</th>
                <th className="border px-4 py-2 w-auto">Team Members</th>
                <th className="border px-4 py-2 w-auto">Topics to cover</th>
                <th className="border px-4 py-2 w-auto">Remarks</th>
                <th className="border px-4 py-2 w-auto">Edit</th>
                <th className="border px-4 py-2 w-auto">Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                appointments.map((e,i)=>{
                  return <tr>
                    <td className='border px-4 py-2 text-center'>{i+1}</td>
                    <td className='border px-4 py-2 text-center'>{e.date}</td>
                    <td className='border px-4 py-2 text-center'>{e.time}</td>
                    <td className='border px-4 py-2 text-left'>{e.client}</td>
                    <td className='border px-4 py-2 text-left'>{e.teamMembers}</td>
                    <td className='border px-4 py-2 text-left'>{e.topicsToCover}</td>
                    <td className='border px-4 py-2 text-left'>{e.remarks}</td>
                    <td onClick={()=>navigate(`/editAppointment/${i}`)} className='border px-4 py-2 text-left'>
                      <i className="fa-solid fa-pen-to-square"></i></td>
                    <td onClick={()=>removeAppointments(`${i}`)} className='border px-4 py-2 text-left'>
                      <i className="fa-sharp fa-solid fa-trash"></i></td>
                </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}

export default List
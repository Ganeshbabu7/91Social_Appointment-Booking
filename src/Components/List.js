import React, {useState, useEffect} from 'react'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'

function List() {
  let [showResults, setShowResults] = useState(false)
  let appointments

  useEffect(() => {
    if(localStorage.getItem("appointments") !== null){
      setShowResults(!showResults)
    }
  }, [])

  if(localStorage.getItem("appointments") !== null){
    appointments = [...JSON.parse(localStorage.getItem('appointments'))]
  }

  return <div >
    <NavBar/>
    <div className='wrapper'>
      <SideBar/>
      <div className='w-full px-5'>  
        <h1 className="pt-3 text-2xl text-blue-900 font-semibold">List View</h1>
        <div className='pt-4'>
          <table className='w-full'>
            <thead>
              <tr>
                <th className="border px-4 py-2 w-auto">S.No</th>
                <th className="border px-4 py-2 w-auto">Date</th>
                <th className="border px-4 py-2 w-auto">Start Time</th>
                <th className="border px-4 py-2 w-auto">End Time</th>
                <th className="border px-4 py-2 w-auto">Client</th>
                <th className="border px-4 py-2 w-auto">Team Members</th>
                <th className="border px-4 py-2 w-auto">Topics to cover</th>
                <th className="border px-4 py-2 w-auto">Remarks</th>
              </tr>
            </thead>
            <tbody> 
               { showResults ?
                (appointments.map((e,i)=>{
                  return <tr key={i}>
                    <td className='border px-4 py-2 text-center'>{i+1}</td>
                    <td className='border px-4 py-2 text-center'>{e.date}</td>
                    <td className='border px-2 py-2 text-center'>{e.startTime}</td>
                    <td className='border px-2 py-2 text-center'>{e.endTime}</td>
                    <td className='border px-4 py-2 text-left'>{e.client}</td>
                    <td className='border px-4 py-2 text-left'>{e.teamMembers}</td>
                    <td className='border px-4 py-2 text-left'>{e.topicsToCover}</td>
                    <td className='border px-4 py-2 text-left'>{e.remarks}</td>
                </tr>
                })) : null
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
}

export default List
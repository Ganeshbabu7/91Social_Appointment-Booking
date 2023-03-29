import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../Components/NavBar'
import SideBar from '../Components/SideBar'
// import { useDispatch } from 'react-redux'
// import { createAppointment } from '../Redux/appointmentReducer'

function CreateAppointment() {
    // let dispatch = useDispatch()
    let navigate = useNavigate()
    let [date,setDate] = useState()
    let [time,setTime] = useState()
    let [client,setClient] = useState()
    let [teamMembers,setTeamMembers] = useState()
    let [topicsToCover,setTopics] = useState()
    let [remarks,setRemarks] = useState()

    let handleSubmit = ()=>{
        // dispatch(createAppointment({date,time,client,teamMembers,topicsToCover,remarks}))
        // if(date === localStorageDate &&)

        localStorage.setItem(`appointments`, JSON.stringify([...JSON.parse(localStorage.getItem(`appointments`)||`[]`),
            {'date':`${date}`,
            'time':`${time}`,
            'client':`${client}`,
            'teamMembers' : `${teamMembers}`,
            'topicsToCover' : `${topicsToCover}`,
            'remarks' : `${remarks}`
            }]))
        navigate('/listview')
    }
       
  return <div >
  <NavBar/>
  <div className='wrapper'>
    <SideBar/>
    <div>
      <h1 className="pl-5 pt-3 text-3xl text-blue-900 font-semibold">Create Appointment</h1>
      <div className='xl:w-[96rem] lg:w-[36] sm:w-[32]'>
      <form className="w-fill px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-wrap mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date"> Date </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="date" type="date" placeholder="Select Date" onChange={(e)=>setDate(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time"> Time </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="time" type="text" placeholder="(Eg : 10.00 A.M - 11.00 A.M)" onChange={(e)=>setTime(e.target.value)}/>
        </div>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="client"> Client </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="client" type="text" placeholder="Client Details" onChange={(e)=>setClient(e.target.value)}/>
        </div>
        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="team"> Team Members </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="team" type="text" placeholder="Team Members" onChange={(e)=>setTeamMembers(e.target.value)}/>
        </div>
        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topics"> Topics to cover </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="topics" type="text" placeholder="Topics To Cover" onChange={(e)=>setTopics(e.target.value)}/>
        </div>
        <div className="w-full mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="remarks"> Remarks </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="remarks" type="text" placeholder="Remarks" onChange={(e)=>setRemarks(e.target.value)}/>
        </div>
        <button onClick={()=>handleSubmit()} className="rounded-full bg-blue-900 px-5 py-1.5 font-semibold text-blue-50">
            Submit</button>
      </form>
      </div>
    </div>
  </div>
</div>
}

export default CreateAppointment
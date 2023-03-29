import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'appointments',
  initialState: {
    appointments: [
        {
            date : "28/March/2023",
            time : "8.00 A.M - 9.00 A.M",
            client : "Ganesh Babu E",
            teamMembers : "Ganesh",
            topicsToCover : "Status about assessment",
            remarks : "Need to complete asap"
        },
    ],
  },
  reducers: {
    createAppointment: (state,action) => {
      state.appointments.push(action.payload)
    // localStorage.setItem('appointments', JSON.stringify([...JSON.parse(localStorage.getItem('appointments')||`[]`),
    //         {'date':`${date}`,
    //          'time':`${time}`,
    //          'client':`${client}`,
    //          'teamMembers' : `${teamMembers}`,
    //          'topicsToCover' : `${topicsToCover}`,
    //          'remarks' : `${remarks}`
    //         }
    //     ]))
    },
    editAppointment: (state,action) => {
      state.appointments.splice(action.payload.index,1,action.payload.data)
    },
    deleteAppointment: (state,action) => {
      state.appointments.splice(action.payload.index,1)
    },
  },
})

export const { createAppointment, editAppointment, deleteAppointment} = counterSlice.actions

export default counterSlice.reducer
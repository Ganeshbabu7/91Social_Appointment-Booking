import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import List from './Components/List';
import Calendar from './Components/Calendar';
import CreateAppointment from './Components/CreateAppointment';
import EditAppointment from './Components/EditAppointment';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='createappointment' element={<CreateAppointment/>} />
      <Route path='editAppointment' element={<EditAppointment/>} />
      <Route path='listview' element={<List/>} />
      <Route path='calendarview' element={<Calendar/>} />
      <Route path='*' element={<Navigate to='listview'/>} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import List from './Components/List';
import CalendarView from './Components/CalendarView';
import CreateAppointment from './Components/CreateAppointment';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path='createappointment' element={<CreateAppointment/>} />
      <Route path='listview' element={<List/>} />
      <Route path='calendarview' element={<CalendarView/>} />
      <Route path='*' element={<Navigate to='createappointment'/>} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;

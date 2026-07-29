import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './assets/pages/Home'
import { CreateEvents } from './assets/pages/CreateEvents'
import { EventDetail } from './assets/pages/EventDetail'
import { EventCalender } from './assets/pages/EventCalender'
import { Register } from './assets/pages/Register'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Login } from './assets/pages/Login'

function App() {
 

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='create-event' element={<CreateEvents/>}/>
        <Route path='event-detail/:id' element={<EventDetail/>} />
        <Route path='calender' element={<EventCalender/>} />
        <Route path='register' element={<Register/>} />
        <Route path='login' element={<Login/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App

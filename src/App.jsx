import './App.css'
import {Routes,Route} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './assets/pages/Home'
import { CreateEvents } from './assets/pages/CreateEvents'
import { EventDetail } from './assets/pages/EventDetail'

function App() {
 

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/create-event' element={<CreateEvents/>}/>
        <Route path='/event-detail/:id' element={<EventDetail/>} />
      </Route>
    </Routes>
  )
}

export default App

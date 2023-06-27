import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { Projects } from './components/Projects'
import { About } from './components/About'
import { IoT } from './components/Iot'
import { CreateProject } from './components/CreateProject'
import { SeeProject } from './components/SeeProject'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Header />
      <br /><br /><br />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/iot' element={<IoT />} />
        <Route path='/createProject' element={<CreateProject />} />
        <Route path='/seePro' element={<SeeProject />} />
      </Routes>
      <footer>
        <h4>made whit 🤍 by jcmr</h4>
      </footer>
    </div>
  )
}

export default App

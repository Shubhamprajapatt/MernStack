import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Adminpage from './pages/Adminpage.jsx'
import Userpage from './pages/Userpage.jsx'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Adminpage/>}/>
      <Route path='/user' element={ <Userpage/>}/> 
    </Routes>
  
    </>
  )
}

export default App

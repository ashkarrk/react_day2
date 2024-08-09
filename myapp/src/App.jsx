import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Signup2 from './components/Signup2'
import { Route, Routes } from 'react-router-dom'
import Statebasic from './components/Statebasic'
import Welcome from './components/Welcome'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1></h1>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Statebasic/> */}
      {/* <Welcome/> */}
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup2 />} />
        <Route path='/l' element={<Login />} />
        <Route path='/sb' element={<Statebasic />} />
        <Route path='/wc' element={<Welcome />} />
        <Route path='/a' element={<Api/>}/>
      </Routes>

    </>
  )
}

export default App

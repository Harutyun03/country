import { useEffect, useReducer } from 'react'
import { initState, reduser } from './store/store'
import './App.css'
import { API } from './Api/Api'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Nav from './components/Nav/Nav'
import Flaginfo from './components/Flaginfo/Flaginfo'


function App() {

  const [state, dispatch] = useReducer(reduser, initState)
  

  useEffect(() => {
      API.getALL(dispatch)
  },[])

  return (
    <div className='app'>
      <Nav dispatch={dispatch}/>
      <Routes>
          <Route path='/' element={<Home state={state}/>}/>
          <Route path='/info/:name' element={<Flaginfo state={state}/>}/>
      </Routes>
      </div>
  )
}

export default App

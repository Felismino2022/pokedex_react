import React from 'react'
import { Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Pokemon from './pages/Pokemon'
import Search from './pages/Search'

const AppRouter = () => {
  return (
   <>
   <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='pokemon/:id' element={<Pokemon/>}/>
            <Route path='search' element={<Search/>}/>
        <Route path='*' element={<Home to="/" />}></Route>
    </Routes>
    </>
  
  )
}

export default AppRouter

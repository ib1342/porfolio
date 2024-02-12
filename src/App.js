import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Banner from './Component.js/Banner'
import Home from './Home'



function App() {
  return (
    <>
   <Router>
           <Routes>

             <Route path="/" element = {<Home/>}> </Route>
             <Route path='/banner' element ={<Banner/>}></Route>
            
            
            </Routes>
        </Router>
   </>
  )
}

export default App
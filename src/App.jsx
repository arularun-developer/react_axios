import React from 'react'
import "./App.css"
import  {Routes,Route} from 'react-router-dom'
import Create from './Create'
import Update from './Update'
import Read from './Read'
import Home from './Home'
 
function App() {

  return (
   
    <Routes>
        <Route path='/' element={<Home/>}></Route>  
       <Route path='/create' element={<Create/>}></Route>
       <Route path='/update/:id' element={<Update/>}></Route>
       <Route path='/read/:id' element={<Read/>}> </Route>
    </Routes>
  
   
  )

}
 

export default App

    {/* <Read/> */}
    // import Read from './Read';
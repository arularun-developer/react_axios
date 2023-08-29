import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from  'axios'

function Create() {
   
    const [values,setvalues] = useState({
        name:"",
        email:"",
        phone:""
    });

     const navgiate = useNavigate();
    const handleSumbit = (event) =>{
       event.preventDefault();
       axios.post('http://localhost:4000/user',values)
       .then(res => {
        console.log(res);
        console.log("🚀 ~ file: Create.jsx:19 ~ handleSumbit ~ res:", res)
        navgiate("/")
       }).catch(err => console.log(err))
    }

   

  return (
    <div className='d-flex flex-column justify-content-center align-items-center  vh-100 '>
    <div className=' w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
     <h1>Add a User</h1>
     <form onSubmit={handleSumbit}>
        <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter your Name'
            onChange={e => setvalues({...values, name: e.target.value})}/>
        </div>
        <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter your email'
             onChange={e => setvalues({...values, email: e.target.value})}
            />
        </div>
        <div className='mb-2'>
            <label htmlFor='text'>Phone:</label>
            <input type='text' name='text' className='form-control' placeholder='Enter your phone number'
             onChange={e => setvalues({...values, phone: e.target.value})}
             />
        </div>
        <button className='btn btn-success m-2' >Sumbit</button>
        <Link className='btn btn-dark' to='/'>Back</Link >
     </form>
    </div>
    </div>
  )
}

export default Create

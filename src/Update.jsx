
import axios from 'axios';
import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
useNavigate
function Update() {
  // const [data,setdata] = useState([]);
  const {id} = useParams();
  const [values,setvalues] = useState({
    name:"",
    email:"",
    phone:""
});
  
  useEffect(() => {
      axios.get('http://localhost:4000/user/'+ id)
      .then((res) =>  {
        setvalues(res.data)
      }
      )
      .catch((err => console.log(err)))
  },[])

  
  const navgiate = useNavigate();

  const handleUpdate = (event) =>{  
    event.preventDefault();
    axios.put('http://localhost:4000/user/'+id,values)
    .then(res => {
     console.log(res);
     console.log("🚀 ~ file: Create.jsx:19 ~ handleSumbit ~ res:", res)
     navgiate("/")
    }).catch(err => console.log(err))

  }
  return (
    <div>
        <div className='d-flex flex-column justify-content-center align-items-center  vh-100'> 
       <div className=' w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
       <h3> update User</h3>
       <form onSubmit={handleUpdate}>
        <div className='mb-2'>
            <label htmlFor='name'>Name:</label>
            <input type='text' name='name' className='form-control' placeholder='Enter your Name'
           value={values.name}  onChange={e => setvalues({...values, name: e.target.value})} />
        </div>
        <div className='mb-2'>
            <label htmlFor='email'>Email:</label>
            <input type='email' name='email' className='form-control' placeholder='Enter your email'
            value={values.email}  onChange={e => setvalues({...values, email: e.target.value})}
            />
        </div>
        <div className='mb-2'>
            <label htmlFor='text'>Phone:</label>
            <input type='text' name='text' className='form-control' placeholder='Enter your phone number' value={values.phone}
            onChange={e => setvalues({...values, phone: e.target.value})}
             />
        </div>
        <button className='btn btn-success m-2' >Update</button>
        <Link className='btn btn-dark' to='/'>Back</Link >
     </form>
       </div>
       </div>
      
    </div>
  )
}

export default Update


import React, { useEffect, useState } from 'react'
 import axios from  'axios'
import { Link, Navigate } from 'react-router-dom';


function Home() {
    const [data,setdata] = useState([]);
    // console.log("🚀 ~ file: Create.jsx:8 ~ Create ~ data:", data)

useEffect(() => {
      axios.get('http://localhost:4000/user')
      .then((res) => setdata(res.data))
      .catch((err => console.log(err)))
},[])

 const handleDelete =(id) =>{
     const confirm = window.confirm('would  you like to delete?')
 if(confirm){
    axios.delete('http://localhost:4000/user/'+id)
    .then(res => {
        location.reload();
    }).catch(err => console.log(err))
   
 }
 }




  return (
    

<div className='d-flex flex-column justify-content-center align-items-center  vh-100 '>
       <h1>List of Users</h1>
       <div className=' w-75 rounded bg-white border shadow p-4'>
        <div>
            <Link to='/create' className=' btn btn-success btn-sm float-end mt-2 fs-25 fw-25' >ADD +</Link>
        </div>
       <table className='table table-light table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>PHONE</th>
                    <th>ACTION</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item,i) => {
                        return(
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                               <td>
                                <Link  to={`/read/${item.id}`}className='btn btn-primary me-2 mt-2'>Read</Link>
                                <Link  to={`/update/${item.id}`}className='btn btn-dark me-2 mt-2'>Edit</Link>
                                <button onClick={  e => handleDelete(item.id)} className='btn btn-danger me-2 mt-2'>Delete</button>
                               </td>
                            </tr>
                        )
                    })
                }
            </tbody>
       </table>
       </div>
       </div>
  )
}

export default Home

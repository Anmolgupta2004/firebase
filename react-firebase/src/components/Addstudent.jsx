
import React from 'react'
import {useState} from 'react';
import {getDatabase ,set,ref} from 'firebase/database';
import {app} from '../firebase';
import { useNavigate } from 'react-router-dom';
const Addstudent = () => {
const [id,setId]=useState(null);
  const [name,setName]=useState('');
  const [age,setAge]=useState(null);
  const [mobile,setMobile]=useState(null);
const navitate= useNavigate();
  const submithandler=(e)=>{
    e.preventDefault();
 const   db=getDatabase(app);
    set(ref(db,'students/'+id),{
      //same id ke sath enter karu to update ho jayega
      name:name,
      age:age,
      mobile:mobile
    }).then((res)=>{
      navitate('/studentlist');
      console.log('Data Added');
    }
    ).catch((error)=>{
      console.log(error);
    }
    )
        console.log(name,age,mobile);
    console.log('Form Submitted');
  }
 
    return (
    <div style={{color:'black'}}>
      <h1>Add Student</h1>
     <form onSubmit={submithandler} style={{display:'flex',flexDirection:'column',width:'50%',margin:'auto',gap:'3px'}} >
     <input onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter Student Id" />

      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Student Name" />
      <input onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Student Age" />
      <input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder='Enter Student Mobile Number'/>
      <button type='submit'> Add Student</button>
           </form>
    </div>
  )
}

export default Addstudent

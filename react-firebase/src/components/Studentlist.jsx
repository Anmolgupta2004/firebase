import React, { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {ref,getDatabase,onValue, remove} from 'firebase/database';
import {app} from '../firebase';
const Studentlist = () => {
  const navigate=useNavigate();

  const [students,setStudents]=useState( null);
 
  useEffect(() =>{
    const db=getDatabase(app);
    const studentRef=ref(db,'students');
    onValue(studentRef,(snapshot)=>{
      const data=snapshot.val();
      setStudents(data);
      console.log(data);
    })
  },[])
  const deleteData=(key)=>{
    const db=getDatabase(app);
    const studentRef=ref(db,'students/'+key);
    remove(studentRef).then((res)=>{
      console.log('Data Delected');
    }
    ).catch((error)=>{
      console.log(error);
    })
    
  }

  
  return (
    <div style={{color:'black'}}>
    
     <h1>Student List</h1>
     <div>
        {students && 
        <div>
          {Object.entries(students).map(([key,value])=>(
          
            <div key={key} style={{border:'1px solid black',padding:'10px',margin:'10px'}}>

              <h3>Student Id:{key}</h3>
              <p>Student Name:{value.name}</p>
              <p>Student Age:{value.age}</p>
              <p>Student Mobile:{value.mobile}</p>
              <button onClick={()=>{deleteData(key)}} style={{padding:'5px', backgroundColor:'blue',color:'white',border:'none',cursor:'pointer'}}>Delect</button>
              
              <button onClick={()=>{ navigate('/updatedata',{state:{key,value}})}} style={{padding:'5px',backgroundColor:'blue',color:'white',border:'none',cursor:'pointer'}}>Edit</button>
            </div>

            
          ))}

        </div>
        }

     </div>
    </div>
  )
}

 export default Studentlist

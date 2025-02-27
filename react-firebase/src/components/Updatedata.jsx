







// const [id,setId]=useState(null);
//   const [name,setName]=useState('');
//   const [age,setAge]=useState(null);
//   const [mobile,setMobile]=useState(null);

// console.log(location);


//   const submithandler=(e)=>{
//     e.preventDefault();
//  const   db=getDatabase(app);
//     set(ref(db,'students/'+id),{
//       //same id ke sath enter karu to update ho jayega
//       name:name,
//       age:age,
//       mobile:mobile
//     }).then((res)=>{
//       navitate('/studentlist');
//       console.log('Data Added');
//     }
//     ).catch((error)=>{
//       console.log(error);
//     }
//     )
//         console.log(name,age,mobile);
//     console.log('Form Submitted');
//   }
//   return (
//     <div style={{color:'black'}}>
//      <form onSubmit={submithandler} style={{display:'flex',flexDirection:'column',width:'50%',margin:'auto'}} >
//      <input onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter Student Id" />
    
//       <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Student Name" />
//       <input onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Student Age" />
//       <input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder='Enter Student Mobile Number'/>
//       <button type='submit'> Edit Student </button>
//            </form>
//     </div>
//   )
// }




import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ref, getDatabase, update } from 'firebase/database';
import { app } from '../firebase';

const Updatedata = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { key, value } = location.state;
  const [student, setStudent] = useState(value);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const db = getDatabase(app);
    const studentRef = ref(db, 'students/' + key);
    update(studentRef, student)
      .then(() => {
        console.log('Data Updated');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{color:'black'}} >
    
      <h1>Update Student</h1>
       <div style={{color:'gray'}}>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',width:'50%',margin:'auto',gap:'3px'}} >
     
       <input onChange={handleChange} name='name' value={student.name} type="text" placeholder="Enter Student Name" />
       <input onChange={handleChange} name='age' value={student.age} type="number" placeholder="Enter Student Age" />
       <input onChange={handleChange} name='mobile' value={student.mobile} type="number" placeholder='Enter Student Mobile Number'/>
       <button type='submit'> Edit Student </button>
            </form>
    </div>
    </div>
  );
};

export default Updatedata;
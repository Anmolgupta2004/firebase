import React from 'react'
import {addDoc,collection,getFirestore} from 'firebase/firestore'
import useState from 'react'
import {app} from '../firebase'


const Addfaculity = () => {

    const [id,setId]=React.useState('');
    const [name,setName]=React.useState('');

    const [age,setAge]=React.useState('');
    const [mobile,setMobile]=React.useState('');

const submithandler= async (e) =>{
    e.preventDefault();
    console.log('Form Submitted');
    console.log(id,name,age,mobile);
    const db=getFirestore(app);
    const docRef= await addDoc(collection(db,'faculity'),{
      id:id,
        name:name,
        age:age,
        mobile:mobile
    })
    console.log(docRef,docRef.id);
      }
  return (
    <div>
     <h1 style={{color:'black'}}>AddFaculity</h1> 
     <form onSubmit={submithandler} style={{display:'flex',flexDirection:'column',width:'50%',margin:'auto',gap:'3px'}} >
     <input onChange={(e)=>setId(e.target.value)} type="text" placeholder="Enter Faculity Id" />
   
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Faculity Name" />
      <input onChange={(e)=>setAge(e.target.value)} type="number" placeholder="Enter Faculity Age" />
      <input onChange={(e)=>setMobile(e.target.value)} type="number" placeholder='Enter Faculity Mobile Number'/>
      <button type='submit'> Add Faculity</button>
           </form>
    </div>
  )
}

export default Addfaculity

import React from 'react'
import {app} from '../firebase'
import {collection,getDocs,getFirestore} from 'firebase/firestore'
import { useEffect ,useState} from 'react'




const Faculitylist = () => {
  const [faculity,setFaculity]=useState([]);
  useEffect(() => {
    const getData=async ()=>{
      const db=getFirestore(app);
      const docRef=collection (db,'faculity');
      const docSnap=await getDocs(docRef);
      const data=docSnap.docs.map(doc=>({
        id:doc.id,
        ...doc.data()
      }));
      console.log(data)
  
     setFaculity(data);
  
    };
   
      getData();


  }
  ,[])
  
  return (
    <div style={{color:'black'}}>
       <h1 style={{color:'black'}}>Faculitylist</h1> 
      

<div>
        {faculity
         && 
        <div>
          {Object.entries(faculity).map(([key,value])=>(
          
            <div key={key} style={{border:'1px solid black',padding:'10px',margin:'10px'}}>

              <h3>Faculity Id:{key}</h3>
              <p>Faculity Name:{value.name}</p>
              <p>Faculity Age:{value.age}</p>
              <p>Faculity Mobile:{value.mobile}</p>
                 </div>

            
          ))}

        </div>
        }

     </div>


           

    </div>
  )
}

export default Faculitylist

{/* <div key={faculity.id} style={{border:'1px solid black',padding:'10px',margin:'10px'}}>
<h3>Faculity Id:{faculity.id}</h3>
<p>Faculity Name:{faculity.name}</p>
<p>Faculity Age:{faculity.age}</p>
<p>Faculity Mobile:{faculity.mobile}</p>
</div> */}

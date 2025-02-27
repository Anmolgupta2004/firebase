# React + Vite

# Firebase Data Storage Project

This project is an implementation of Firebase where student data is stored in **Firebase Realtime Database**, and faculty data is stored in **Firebase Firestore**.

## Technologies Used
- **Firebase** (Realtime Database & Firestore)
- **JavaScript/React **

## Features
- Store and retrieve **student data** from Firebase Realtime Database.
- Store and retrieve **faculty data** from Firebase Firestore.

## Setup Instructions

1. **Create a Firebase Project**  
   - Go to [Firebase Console](https://console.firebase.google.com/).
   - Create a new project.
   - Enable **Realtime Database** and **Firestore**.

2. **Add Firebase to Your Project**  
   - Install Firebase SDK:
     ```sh
     npm install firebase
     ```
   - Initialize Firebase in your project:
     ```js
     import { initializeApp } from "firebase/app";
     import { getDatabase, ref, set } from "firebase/database";
     import { getFirestore, collection, addDoc } from "firebase/firestore";
     
     const firebaseConfig = {
       apiKey: "AIzaSyDkY_GK4VDusJgoYPyJVxGMIcDBWQm-28I",
       authDomain: "management-platform-584fb.firebaseapp.com",
       projectId: "management-platform-584fb",
       storageBucket: "management-platform-584fb.firebasestorage.app",
       messagingSenderId: "270973307863",
       appId: "1:270973307863:web:4a725ec0d161615d5b5992",
        measurementId: "G-JLV19K4BZH",
      databaseURL:"https://management-platform-584fb-default-rtdb.firebaseio.com"

     
     };

     const app = initializeApp(firebaseConfig);
     const database = getDatabase(app);
     const firestore = getFirestore(app);
     ```

3. **Store Student Data in Realtime Database**  
   ```js
   function saveStudentData(studentId, name, age) {
       set(ref(database, 'students/' + studentId), {
           name: name,
           age: age,
           mobile:mobile
       });
   }
   ```

4. **Store Faculty Data in Firestore**  
   ```js
   async function saveFacultyData(name, department) {
       try {
           const docRef = await addDoc(collection(firestore, "faculty"), {
               name: name,
               age: age,
               mobile:mobile
              
           });
           console.log("Faculty added with ID: ", docRef.id);
       } catch (e) {
           console.error("Error adding faculty: ", e);
       }
   }
   ```

## Future Improvements

- Implement real-time updates and notifications.
- Create a user-friendly UI for data entry and retrieval.

## Author
- **Anmol Gupta**

---

This is a basic Firebase integration project where student data is managed using Realtime Database and faculty data using Firestore. 🚀


 

import { Children, Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Dashboard from './components/Dashboard'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddStudent from './components/Addstudent'
import Studentlist from './components/Studentlist'
import Updatedata from './components/Updatedata'
import Addfaculity from './components/Addfaculity'
import Faculitylist from './components/Faculitylist'


const myRoutes = createBrowserRouter([
  {path: '/',Component: Dashboard,children: [
     {path: '/',Component: Studentlist},
     {path: '/addStudent',Component: AddStudent},
     {path: '/studentlist',Component: Studentlist},
     {path: '/updatedata',Component: Updatedata},
     {path: '/addfaculity',Component: Addfaculity},
     {path: '/faculitylist',Component: Faculitylist},
     



  ]}
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={myRoutes}/>
    
       
    </>
  )
}

export default App

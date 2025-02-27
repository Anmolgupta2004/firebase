
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh' }}>
      <div style={{ width: '20%', backgroundColor: '#007BFF', color: 'white', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px' }}>Dashboard</h2>
        <nav>
          <Link to='/addStudent' style={{ color: 'white', display: 'block', margin: '10px 0', textDecoration: 'none', fontSize: '16px' }}>Add Student</Link>
          <Link to='/studentlist' style={{ color: 'white', display: 'block', margin: '10px 0', textDecoration: 'none', fontSize: '16px' }}>Student List</Link>
          <Link to='/addfaculity' style={{ color: 'white', display: 'block', margin: '10px 0', textDecoration: 'none', fontSize: '16px' }}>Add Faculity</Link>
          <Link to='/faculitylist' style={{ color: 'white', display: 'block', margin: '10px 0', textDecoration: 'none', fontSize: '16px' }}>Faculity List</Link>
       
        </nav>
      </div>
      <div style={{ width: '80%', padding: '20px', backgroundColor: '#f8f9fa', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
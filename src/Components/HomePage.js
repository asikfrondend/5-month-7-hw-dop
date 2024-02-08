import React from 'react';
import { useSelector } from 'react-redux';
import './css/HomePage.css';

function HomePage() {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className='home-css'>
      <h2>Welcome</h2>
      <p>{user ? `Welcome, ${user.username}!` : 'Welcome!'}</p>
    </div>
  );
}

export default HomePage;

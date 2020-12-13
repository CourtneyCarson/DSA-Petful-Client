import React from 'react';
import { Link } from 'react-router-dom';
// import './landing-page.css';


function LandingPage() {
  return (
    <main className='landing-fullpage'>
      <div className='landing-page'>
        <h1> Adoption Landing Page information </h1>
        <img src='https://live.staticflickr.com/65535/50707103271_c9d1f629fc_w.jpg' alt ='dog-cat-under-blanket'></img>
        <Link to='/adopt'>
          <button> Start Adoption Process  </button>
        </Link>
      </div>
    </main>
  );
}
export default LandingPage;
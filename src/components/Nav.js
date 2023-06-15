/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import TeQueenMatchStor from '../images/TeQueenMatchStor.png';
import MentorLogo from '../images/MentorLogo.png';

// this const is a functional component that takes in props and returns a nav bar with a logo and a login button if we're not logged in. It also sets up an event handler for the login button that sets the show modal state to true and the is sign up state to false

const Nav = ({ authToken, minimal, setLogIn, Login, setIsSignUp }) => {
  const handleClick = () => {
    setLogIn(true);
    setIsSignUp(false);
  };

  return (
    <nav>
      <div className="logo-container">
        <img
          className="logo"
          src={minimal ? MentorLogo : TeQueenMatchStor} // means if minimal is true, show colorLogo, else show whiteLogo
          alt="logo" />
      </div>
      <Link to="/tinder-cards" className="demo-link">GO TO DASHBOARD MOCKUP ➡️ </Link>
      {!authToken && !minimal && ( // only show the login button if we're not logged in and we're not on the minimal page
        <button
          className="nav-button"
          type="button"
          onClick={handleClick}
          disabled={Login}>
                    Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;

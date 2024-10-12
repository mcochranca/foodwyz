import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Signup = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="auth-container">
      <h2>Sign Up for FoodWyz</h2>
      <button className="btn" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>
        Sign Up
      </button>
    </div>
  );
};

export default Signup;

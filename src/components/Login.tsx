import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="auth-container">
      <h2>Login to FoodWyz</h2>
      <button className="btn" onClick={() => loginWithRedirect()}>
        Log In
      </button>
    </div>
  );
};

export default Login;

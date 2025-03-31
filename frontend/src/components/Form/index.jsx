import React from 'react'; 
import './styles.css';
import InputGroup from '../InputGroup';
import Button from '../Button';

const Form = ({ type = 'login', onSubmit, onToggle, error, }) => {
  return (
    <div className="form-container">
      <div className="header">
        <h1>{type === 'login' ? 'Welcome Back' : 'Create Account'}</h1>
        <div className="subheader">
          {type === 'login' ? 'Sign in to Trackify' : 'Join our community'}
        </div>
      </div>

      <form onSubmit={onSubmit}>
        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            placeholder="name@example.com" 
            required 
          />
        </div>
        <InputGroup label={'Email'} type={'email'} placeholder={'name@example.com'} onChange={''}/>

        {type === 'signup' && (

            <InputGroup label={'Username'} type={'text'} placeholder={'Choose a username'} onChange={''}/>

        )}

        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder={`Enter your ${type === 'login' ? 'password' : 'new password'}`} 
            required 
          />
        </div>
        <InputGroup label={'Password'} type={'password'} placeholder={'Enter your password'} onChange={''}/>


        <button type="submit" className="login-button">
          {type === 'login' ? 'Sign In' : 'Create Account'}
        </button>

        {type === 'login' && (
          <>
            <div className="separator">
              <span>or</span>
            </div>

            <button type="button" className="oauth-button">
              Continue with Google
            </button>

            <Button onClick={''} buttonText={'Continue with Google'} />
          </>
        )}
      </form>

      <div className="footer-links">
        <p onClick={onToggle}>
          {type === 'login' 
            ? 'Don\'t have an account? Create New Account' 
            : 'Already have an account? Sign In'}
        </p>
      </div>
    </div>
  );
};

export default Form;
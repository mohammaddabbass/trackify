import React, { useState } from 'react'; 
import './styles.css';
import InputGroup from '../InputGroup';
import Button from '../Button';

const Form = ({ onSubmit, error }) => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="form-container">
            <div className="header">
                <h1>{isLogin ? 'Welcome Back' : 'Create Account'}</h1>
                <div className="subheader">
                    {isLogin ? 'Sign in to Trackify' : 'Join our community'}
                </div>
            </div>

            <form onSubmit={onSubmit}>
                {error && <div className="error-message">{error}</div>}

                <InputGroup 
                    label="Email"
                    type="email"
                    placeholder="name@example.com"
                    onChange={() => {}}
                />

                {!isLogin && (
                    <InputGroup
                        label="Username"
                        type="text"
                        placeholder="Choose a username"
                        onChange={() => {}}
                    />
                )}

                <InputGroup
                    label="Password"
                    type="password"
                    placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                    onChange={() => {}}
                />


                <Button 
                    variant="primary"
                    buttonText={isLogin ? 'Sign In' : 'Create Account'}
                    onClick={onSubmit}
                />

                {isLogin && (
                    <>
                        <div className="separator">
                            <span>or</span>
                        </div>

                        <Button
                            variant="bordered"
                            buttonText="Continue with Google"
                            onClick={() => {}}
                        />
                    </>
                )}
            </form>

            <div className="footer-links">
                <p onClick={() => setIsLogin(!isLogin)}>
                    {isLogin 
                        ? "Don't have an account? Create New Account" 
                        : "Already have an account? Sign In"}
                </p>
            </div>
        </div>
    );
};

export default Form;
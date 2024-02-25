import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import './signup.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import { useUserContext } from './UserContext';

const Login = ({ setIsLoggedIn}) => {
  const navigate = useNavigate();
  const { setUserEmailContext } = useUserContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {

  
      
      if (true) {
        
       

        setIsLoggedIn(true);
        navigate('/homie')
      //   navigate('/tracknow', { state: { userEmail } });
      // } else {
      //   console.error('Error logging in:', data.error);
        
      // }
      
      }
    } catch (error) {
      console.error('Error:', error.message);
      
    }
  };

    
  
  return (
    
    <div className="bg-div" id="bg-div">
      <div className='c-div'>
      <div className="form-container">
          <form onSubmit={handleLogin}>
            <div className="button-container">
            <button className="google-btn" type='button'>
            </button>
            <button className="google-btns" type='button'>
            </button>
            </div>
            <h6 className='continue'>---------------------Or continue with------------------------</h6>
            
            <div className="form-group">
              <input type="email" placeholder="Email" className="wide-input" value={email}
                onChange={handleEmailChange} />
            </div>
            <div className="form-groups">
              <input type="password" placeholder="Password" className="wide-input" value={password}
                onChange={handlePasswordChange} />
            </div>

            <button type="submit">Login</button>
            
            <h6 className='member'>Sign Up</h6>
            
          </form>
        </div>
      </div>
    </div>
    
  );
};

export default Login;

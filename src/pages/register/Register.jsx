import React from 'react';
import './register.css'
import {Link} from 'react-router-dom'
import Image from '../../assets/Image.png'

const Register = () => {

  return (
    <div className='register section__padding'>
      <div className="register-container">
        <h1>register</h1>
        <p className='upload-file'>Upload Profile pic</p>
        <div className="upload-img-show">
          <img src={Image} alt="banner" />
          <p>browse media on your device</p>
        </div>
        <form className='register-writeForm' autoComplete='off' >
          <div className="register-formGroup">
            <label>Upload</label>
            <input type="file" className='custom-file-input'
          />
          </div>
          <div className="register-formGroup">
            <label>Full Name</label>
            <input type="text" placeholder='Name' />
          </div>
          <div className="register-formGroup">
            <label>Username</label>
            <input type="text" placeholder='Username'  />
          </div>
          <div className="register-formGroup">
            <label>Email</label>
            <input type="email" placeholder='Email' />
          </div>
          <div className="register-formGroup">
            <label>Password</label>
            <input type="text" placeholder='Password'   />
          </div>
         <div className="register-button">
          <button className='register-writeButton'>register</button>
          <Link to="/login">
            <button className='reg-login-writeButton' >Login</button>
          </Link>
         </div>
        </form>
      </div>
    </div>
   )
};

export default Register;

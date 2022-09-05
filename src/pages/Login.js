import React from "react";
import logo from '../assets/images/logo-ico.png';
import '../App.css'

const Login = () => {
  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <main>
        <div className='container'>
          <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a Laboratorio Teso de México
        </p>
        <div className='container-login'>
            <div className='header-login'>              
            </div>
            <div className='main-login'>
               <form>
                <div className='input-container'>
                <label>Usuario: </label>
                  <input type="text" name='usename' />
                </div>
                <div className='input-container'>
                <label>Password: </label>
                  <input type="Password" name='usepass' />
                </div>
                <div className='container-button-login'>
                  <input type="submit" />
                </div>
               </form>
            </div>
            <div className='foother-login'>
            </div>
        </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
};

export default Login;
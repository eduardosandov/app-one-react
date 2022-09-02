import React from 'react';
import '../App.css';


const Login = () => {



    return (
        <div className="Login">
        <header className="App-header">        
        </header>
        <main>
          <div className='container'>
            
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
}

export default Login;
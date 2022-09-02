
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
      </header>
      <main>
        <div className='container'>
        <p>
          Welcome to Laboratorio Teso de México
        </p>
        <div className='container-login'>
            <div className='header-login'>              
            </div>
            <div className='main-login'>
               <form>
                <div className='login-user'>
                <label>Usuario: </label>
                  <input type="text" name='usename' />
                </div>
                <div className='login-password'>
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

export default App;


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div class="card">

          <div class="container">
            <div class="login">
              <h1>SIGN UP</h1>
              <p>Fill all the required details...</p>
              <form method="post">
                <input type="text" name="f" placeholder="First name" required="required" />
                
            
                <input type="email" name="em" placeholder="E-mail" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Let me signup.</button>
                <p>Already a user?<a href="https://www.w3schools.com">Login</a></p>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <div class="card">

          <div class="container">
            <div class="login">
              <h1>Login</h1>
              <form method="post">
                <input type="text" name="u" placeholder="Username" required="required" />
                <input type="password" name="p" placeholder="Password" required="required" />
                <button type="submit" class="btn btn-primary btn-block btn-large">Let me in.</button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

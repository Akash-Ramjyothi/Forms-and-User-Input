import Header from './components/Header.jsx';
import Login from './components/StateLogin.jsx';
import Signup from './components/Signup.jsx';

function App() {
  return (
    <>
      <Header />

      <main className="app-container">
        <section className="auth-section">
          <div className="auth-wrapper">
            <Login />

            {/* Uncomment when signup flow is required */}
            {/* <Signup /> */}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

import Navbar from './components/Navbar/Navbar';
import Router from './routing/Router';

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      <nav>
        <Navbar />
      </nav>
      <main style={{ minHeight: '100vh' }}>
        <Router />
      </main>
    </div>
  );
}

export default App;

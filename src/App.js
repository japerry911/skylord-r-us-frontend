import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }}>
      <nav>
        <Navbar />
      </nav>
      <main style={{ minHeight: '100vh' }}>
        <Homepage />
      </main>
    </div>
  );
}

export default App;

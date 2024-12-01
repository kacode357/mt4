// src/App.tsx
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './routes/Routes'; // Import RoutesComponent

function App() {
  return (
    <Router>
      <RoutesComponent /> {/* Chỉ cần gọi RoutesComponent ở đây */}
    </Router>
  );
}

export default App;

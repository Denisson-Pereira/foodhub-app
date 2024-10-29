// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BemVindo from './BemVindo';
import LoginForm from './LoginForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/bem-vindo" element={<BemVindo />} />
      </Routes>
    </Router>
  );
}

export default App;

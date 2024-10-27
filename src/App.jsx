import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
import { Link, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import { StarRatingDashboard } from './start-rating-dashboard';
import { InfiniteLoading } from './infinite-loading';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <p>This React app is now wrapped with React Router.</p>
      </header>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/start-rating" element={<StarRatingDashboard />} />
        <Route path="/infinite-loading" element={<InfiniteLoading />} />
      </Routes>
    </div>
  );
}

export default App;

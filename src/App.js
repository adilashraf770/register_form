import './App.scss';
//bootstrap JS
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Pages
import Home from './pages/Home';
import Courses from './pages/Courses';
import Register from './pages/Register';
function App() {
  return (
    <div className='App'>
      <Home />
      <Courses />
      <Register />
    </div>
  );
}

export default App;

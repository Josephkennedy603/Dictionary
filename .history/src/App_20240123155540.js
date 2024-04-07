import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import errorpage from './errorpage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<errorpage/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

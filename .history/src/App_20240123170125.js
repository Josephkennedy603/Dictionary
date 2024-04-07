import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import Errorpage from './errorpage';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <link to="/">Home</link>
        <Routes>
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Errorpage/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

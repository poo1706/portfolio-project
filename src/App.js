import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Home from './Home';
import About from './components/About';
import Projects from './components/Projects';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Skills from './components/Skills';
import Resumne from './components/Resumne';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
   {/*} <Counter/>*/}
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='projects' element={<Projects/>}></Route>
        <Route path='skills' element={<Skills/>}></Route>
        <Route path='resume' element={<Resumne/>}></Route>
        <Route path='contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

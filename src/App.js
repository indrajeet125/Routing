import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error from './Component/Error';
import Computer from './Component/Computer';
import Books from "./Component/Books"



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/books' element={<Books/>}></Route>
          <Route path='/computer' element={<Computer/>}></Route>
          <Route path='/*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

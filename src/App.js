

import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Table } from './pages/table';
import { Footer } from './components/footer';
import { More } from './pages/more';


function App() {
  return (
    <div>
      <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/details/:contactId" element={<More />}></Route>
         
        </Routes>
      </BrowserRouter>
      </div>
     
      <Footer/>
    </div>




  );
}

export default App;


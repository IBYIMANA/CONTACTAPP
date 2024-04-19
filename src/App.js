
import './App.css';
import { Header } from './components/header';
import { Home } from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Table } from './pages/table';
import { Footer } from './components/footer';
import  Update from './pages/Update';
import Details from './pages/Details';

function App() {
  return (
    <div>
      <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Table />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/Details/:contactId" element={<Details />}></Route>
          <Route path="/update/:contactId" element={<Update />}></Route>
         
        </Routes>
      </BrowserRouter>
      </div>
     
      <Footer/>
    </div>
  );
}

export default App;


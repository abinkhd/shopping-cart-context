import './App.css';
import AllProducts from './component/AllProducts';
import Header from './component/Header';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from './component/Cart';
import Filter from './component/Filter';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<AllProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      <AllProducts />
    </div>
  );
}

export default App;

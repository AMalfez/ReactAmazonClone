import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Checkout from './components/Checkout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;


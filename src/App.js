import './App.css';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Error404 } from './pages/Error404';
import { WishList } from './pages/WishList';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Header } from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wish-list" element={<WishList />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

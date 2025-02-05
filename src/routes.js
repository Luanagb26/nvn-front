import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Footer from "./components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter basename="/">
      <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;

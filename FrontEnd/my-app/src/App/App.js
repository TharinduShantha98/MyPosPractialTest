import logo from '../logo.svg';
import '../App.css';
import Invoice from "../pages/Invoice/Invoice";
import React from "react";
import Product from "../pages/Product/Product";
import Report from "../pages/Report/Report";
import Navbar from "../pages/navBar/Nav";
import{Routes, Route} from "react-router-dom";
import Layout from "../pages/Layout";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path="invoice" element={<Invoice/>}/>
                <Route path="product" element={<Product/>}/>
                <Route path="report" element={<Report/>}/>
            </Route>
        </Routes>



    {/*  <Invoice/>*/}

 {/*   <Product/>*/}

{/* <Report/>*/}


    </div>
  );
}

export default App;

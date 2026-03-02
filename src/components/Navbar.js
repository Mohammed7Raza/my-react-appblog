
import "react-router-dom"
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import {ReactProvider} from"react-router-dom";
import { Link } from 'react-router-dom';
import "./Components.css"


//const router =createBrowserRouter([{
//    path:"/",
//    element:<Navbar></Navbar>
//}
//
//])

function Navbar() {

    return( 
        

        <div className="navbarclass">
        {/* <RouterProvider router={router}></RouterProvider> */}

            <p className="logo">Blog page</p>
            <div className="hoverclass">
                {/* <Link to="/" className="home">Home</Link>
                <Link to="/" className="about">About</Link>
                <Link to="/" className="blog">Blog</Link>
                <Link to="/" className="contact">Contact</Link> */}

                <a  className="home">Home</a>
                <a to="/" className="about">About</a>
                <a to="/" className="blog">Blog</a>
                <a to="/" className="contact">Contact</a>
            </div>
        </div>
    );

 }

export default Navbar;
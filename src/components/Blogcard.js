
import React from "react";
import { useState } from "react";
import "./Components.css"

const dummy= [
    {
  id: 1,
  title: "Introduction to React",
  description: "Learn the basics of React.",
  author: "John",
  date: "25 Feb 2026",
},

{
  id: 2,
  title: "Routers in React",
  description: "Learn the navigation functionality in React",
  author: "Raza",
  date: "25 Jan 2026"
},

{
  id: 3,
  title: "Scanning feature using React",
  description: "Learn to create a scanning page using React",
  author: "Shahid",
  date: "2 Dec 2025"
},

{
  id: 4,
  title: "Props in React",
  description: "Learn the basic of props concept",
  author: "Shoaib",
  date: "5 Feb 2024"
},
 {
  id: 5,
  title: "useState in React",
  description: "Learn the concept of useState in React",
  author: "Hameed",
  date: "25 Feb 2026",
},
 {
  id: 6,
  title: "useEffect in React",
  description: "Learn the concept of useEffect in React",
  author: "Suhail",
  date: "2 Mar 2023",
},
]

function Blogcard() {

    const [products, setproducts] = useState(dummy)



    return( 

        <div className="flex flex-col gap-5 p-3 ">
            {products.map((element)=>{


            
                
                return (<div className="bg-yellow-200 rounded p-2 text-emerald-800"> 
                    <p>{element.title}</p>
                    <p>{element.description}</p>
                    <p>{element.author}</p>
                    <p>{element.date}</p>
                    <button className="blogcardbutton"> Read more</button>

                    
                    </div>)

            })
                }



        </div>
    );

 }

export default Blogcard;
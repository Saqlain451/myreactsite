import React from 'react'
import img from "./Images/contact.png"
import { NavLink } from 'react-router-dom'
const Contact = () => {
  return (
    <>
        <div className="container my-5">
        <h1 className="text-center"> <span>Con</span>tact Us</h1>
            <div className="row home">
                <div className="col-md-6 order-2 order-lg-1">
    
                <h2 className='mt-1 text-center text-lg-start'>Need a hand? Or a high five?</h2>
                <h2 className='brand text-center text-lg-start'>H Saqlain</h2>
                <p className='text-center text-lg-start'>Here's how to reach us. Submit a help request <i class="fa-solid fa-arrow-right-long"></i></p>
                <button className='btn btn-started d-block mx-auto mx-lg-0'>
                    <NavLink to="/contact/form" className="test"> Email Us </NavLink>
                </button>
                </div>
                <div className="col-md-6 order-1 order-lg-2">
                    <img src={img} alt="Contact-img" className='animated mx-auto d-block' height="400px"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
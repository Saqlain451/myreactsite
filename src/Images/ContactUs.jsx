import React from 'react'

const ContactUs = () => {
  return (
   <>
      <div className="container my-5">
        <div className="row">
            <div className="col-md-6">
                <h2 className="text-center text-lg-start"> <span>Con</span>tact Us</h2>
                <p>Need a hand? Or a high five?</p>
                <p>Here's how to reach us.</p>
                <h5 className='mt-2'>Submit a help request </h5>
                <button className="btn btn-started mx-auto d-block mx-lg-0"><NavLink to="/contact" className="test">
              Email Us
            </NavLink>
            </button>
            </div>
            <div className="col-md-6"></div>
        </div>
      </div>
   </>
  )
}

export default ContactUs
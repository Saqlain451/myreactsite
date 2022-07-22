import React from 'react'
import Comp from './Comp'
import Service from "./Images/service.jpg"
const About = () => {
  return (
    <>
       <Comp
          hText="Welcome to about us page"
          btnText = "Contact us"
          page = "/contact"
          img={Service}
       />
    </>
  )
}

export default About
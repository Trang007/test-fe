import React from 'react'
import AboutUs from './AboutUs'
import Services from "./Services"
import Improve from "./Improve"
import style from './Container.module.css'

const Container = () => {
  return (
    <div>
        <AboutUs/>
        <Services/>
        <Improve/>
    </div>
  )
}

export default Container
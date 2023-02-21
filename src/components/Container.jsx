import React from 'react'
import AboutUs from './AboutUs'
import Services from "./Services"
import Improve from "./Improve"
import Static from './Static'
import Blog from "./Blog"
import style from './Container.module.css'

const Container = () => {
  return (
    <div>
        <AboutUs/>
        <Services/>
        <Improve/>
        <Static/>
        <Blog/>
    </div>
  )
}

export default Container
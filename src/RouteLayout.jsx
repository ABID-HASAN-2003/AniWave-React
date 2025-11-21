import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Components/GlobalComponents/Navber'
import Footer from './Components/GlobalComponents/Footer'

const RouteLayout = () => {
  return (
    <div>
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RouteLayout

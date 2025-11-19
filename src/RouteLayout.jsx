import React from 'react'
import { Outlet } from 'react-router'
import Navber from './Components/GlobalComponents/Navber'

const RouteLayout = () => {
  return (
    <div className='px-5 md:px-0'>
      <Navber/>
      <Outlet/>
    </div>
  )
}

export default RouteLayout

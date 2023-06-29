import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Home } from '../components/Home'
import { HomeComponent } from '../components/HomeComponent'

function HomeLayout() {
    const {state} = useContext(AuthContext)
  return ( 
    <>
    {state.user === null ? (<Home/>) : (<HomeComponent />)}
    </>
  )
}

export default HomeLayout
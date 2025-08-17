import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route, Navigate } from "react-router-dom"
import Add from './pages/Add.jsx'
import List from './pages/List.jsx'
import Orders from './pages/Orders.jsx'
import Login from './components/Login.jsx'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('admin-token')?localStorage.getItem('admin-token'):'')

  useEffect(() => {
    localStorage.setItem('admin-token',token)
  },[token])

  return (


    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer />
      {token === ''
        ? <Login setToken={setToken}/>
        :
        <>
          <Navbar setToken={setToken}/>
          <hr />
          <div className='flex  w-full'>
            <Sidebar />
            <main className='flex-1 px-6 py-8 text-gray-600 text-base'>
              <Routes>
                <Route path='/' element={<Navigate to='/add' replace />} />
                <Route path='/add' element={<Add token={token}/>} />
                <Route path='/list' element={<List token={token}/>} />
                <Route path='/orders' element={<Orders token={token}/>} />
              </Routes>
            </main>
          </div>
        </>
      }
    </div>
  )

}

export default App

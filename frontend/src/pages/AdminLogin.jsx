import axios from 'axios'
import { useState, useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const AdminLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { backendUrl } = useContext(ShopContext)
    const adminBase = import.meta.env.VITE_ADMIN_URL

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault()
            const response = await axios.post(backendUrl + '/api/user/admin', { email, password })
            
            if (response.data.success) {
                localStorage.setItem('admin-token', response.data.token)
                toast.success('Login successful! Redirecting to admin panel...')
                
                setTimeout(() => {
                    if (adminBase) {
                        window.location.href = adminBase
                    } else {
                        window.open('http://localhost:5174', '_blank')
                    }
                }, 1500)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center w-full'>
            <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
                <h1 className='text-2xl font-bold mb-4'>Admin Login</h1>
                <form onSubmit={onSubmitHandler}>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            value={email} 
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                            type='email' 
                            placeholder='admin@email.com' 
                            required
                        />
                    </div>
                    <div className='mb-3 min-w-72'>
                        <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            value={password} 
                            className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' 
                            type='password' 
                            placeholder='Enter admin password' 
                            required
                        />
                    </div>
                    <button className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition-colors' type='submit'>
                        Login to Admin Panel
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin
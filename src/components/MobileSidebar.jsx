import React from 'react'
import { useNavigate } from 'react-router-dom'


const MobileSidebar = ({ closeToggle }) => {
    const navigate = useNavigate();
    return (
        <div className='mt-50 px-8 py-4 pt-20'>
            <p onClick={() => {
                closeToggle()
                navigate('/auth/login')
            }

            } className='mb-3 font-bold'>Sign in</p>
            <p onClick={() => {
                closeToggle()
                navigate('/auth/register')
            }} className='font-bold'>Sign up</p>


        </div>
    )
}

export default MobileSidebar
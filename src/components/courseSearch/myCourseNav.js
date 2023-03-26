import React from 'react'
import './nav.css'
import logo from '../../assets/lms_logo.png'
import {FaSearch} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {RiAccountCircleFill} from 'react-icons/ri'
import {IoIosArrowDown} from 'react-icons/io'

const Navbar =()=>{
    return(
        <>
        <nav>
            <div className='first'>
                <img src={logo} alt="" />
                    <div className='srchbx'>
                        <input type="text" placeholder='Find a course'/>
                        <button><FaSearch/></button>
                    </div>
               </div>
            <div className='second'>
                <div className='tabs'>
                    <a href="/">Explore Categories</a>
                    <a href="/">My Courses</a>
                    <a href="/">Achievement</a>
                    <a href="/">Support</a>
                </div>
                <div className='other'>
                    <div className='inot'>
                        <AiOutlineShoppingCart className='cart'/>
                        <IoMdNotificationsOutline className='notify'/>
                    </div>
                    <div className='prof'>
                        <RiAccountCircleFill className='primg'/>
                        <p>John Doe</p>
                        <IoIosArrowDown className='prdrp'/>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar
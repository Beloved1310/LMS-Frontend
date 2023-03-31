import React from 'react'
import '../adminStyles/adminNav.css'
import img from '../../assets/lms_logo.png'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiChevronDown} from 'react-icons/bi'
import profile from '../../assets/user.png'

const AdminNav =()=>{
    return(
        <>
            <nav id='admin-nav'>
                <img src={img} alt="" />
                <div className='tabs'>
                    <div className='nrm-tabs'>
                        <a href="/admin/overview">Overview</a>
                        <a href="/admin/allCourses">Courses</a>
                        <a href="/admin/allStudents">Student Management</a>
                        <a href="/admin/allInstructor">Instructor Managament</a>
                        <a href="/admin/studentCertificate">Certificate</a>
                    </div>
                    <div className='icon-tabs'>
                        <AiOutlineShoppingCart id='tab-icn'/>
                        <IoMdNotificationsOutline id='tab-icn'/>
                        <div className='nav-prf'>
                            <img src={profile} alt="" />
                            <p>John Doe</p>
                            <BiChevronDown id='tab-icn'/>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AdminNav
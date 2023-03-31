import React from 'react';
import AdminNav from './adminNav';
import Footer from './../../molecules/Footer';
import '../adminStyles/adInstructor.css'
import {AiOutlineReload} from 'react-icons/ai'
import {AiFillFileText} from 'react-icons/ai'
import {IoIosOptions} from 'react-icons/io'


const InstructorOverview =()=>{
    return(
        <>
            <AdminNav/>
                <div className='ad-crs-wrp'>
                    <div className='ad-crs-head'>
                        <p>Instructor</p>
                        <div className='ad-tabs'>
                            <div className='flt-info'>
                                <div className='shwng'>
                                    <p>Showing</p>
                                    <input type="text" placeholder='All Courses'/>
                                </div>
                                <div className='srtby'>
                                    <p>Sort by</p>
                                    <input type="text" placeholder='First Name'/>
                                </div>
                            </div>
                            <div className='flt-btns'>
                                <button className='flbtn'>
                                    <AiOutlineReload id='apl'/>
                                   <p>Apply Filter</p>
                                </button>
                                <button className='flbtn' id='exp'>
                                    <AiFillFileText/>
                                    <p>Export Analytics</p>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='ad-main-std'>
                       
                    </div>

                </div>
            <Footer/>
        </>
    )
}

export default InstructorOverview
import React from 'react';
import AdminNav from './adminNav';
import Footer from './../../molecules/Footer';
import '../adminStyles/adCourse.css'
import {AiOutlineReload} from 'react-icons/ai'
import {AiFillFileText} from 'react-icons/ai'
import {IoIosOptions} from 'react-icons/io'
import crsimg from '../../assets/Rectangle 10044.png'

const CourseOverview =()=>{
    return(
        <>
            <AdminNav/>
                <div className='ad-crs-wrp'>
                    <div className='ad-crs-head'>
                        <p>Courses</p>
                        <div className='ad-tabs'>
                            <div className='flt-info'>
                                <div className='shwng'>
                                    <p>Showing</p>
                                    <input type="text" placeholder='All Courses'/>
                                </div>
                                <div className='srtby'>
                                    <p>Sort by</p>
                                    <input type="text" placeholder='Newly Published'/>
                                </div>
                            </div>
                            <div className='flt-btns'>
                                <div className='flbtn'>
                                    <AiOutlineReload id='apl'/>
                                   <p>Apply Filter</p>
                                </div>
                                <div className='flbtn' id='exp'>
                                    <AiFillFileText/>
                                    <p>Export Analytics</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='ad-main-crs'>
                        <div className='ad-crs-crd'>
                            <img src={crsimg} alt="" />
                            <div className='ad-crs-txt'>
                                <p>Introduction to Product Design</p>
                                <h6>Lorem ipsum dolor sit amet consectetur. Sollicitudin sit et malesuada lorem tempus morbi at tortor mauris. Velit eget id pulvinar quam sed dui vitae sollicitudin nunc. Sed risus quis quam elit leo. </h6>
                                <div className='ad-det-box'>
                                    <div>
                                        <p>INSTRUCTOR:</p>
                                        <span> JOHN DOE</span>
                                    </div>
                                    <div>
                                        <span>2 </span>
                                        <p>ASSIGNMENTS</p>
                                    </div>
                                    <div>
                                        <span>23</span>
                                        <p>STUDENTS ENROLLED:</p>
                                    </div>
                                    <div>
                                        <p>ADDED:</p>
                                        <span>16 Febuary 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ad-ops'>
                            <IoIosOptions/>
                            </div>
                        </div>

                        <div className='ad-crs-crd'>
                            <img src={crsimg} alt="" />
                            <div className='ad-crs-txt'>
                                <p>Introduction to Product Design</p>
                                <h6>Lorem ipsum dolor sit amet consectetur. Sollicitudin sit et malesuada lorem tempus morbi at tortor mauris. Velit eget id pulvinar quam sed dui vitae sollicitudin nunc. Sed risus quis quam elit leo. </h6>
                                <div className='ad-det-box'>
                                    <div>
                                        <p>INSTRUCTOR:</p>
                                        <span> JOHN DOE</span>
                                    </div>
                                    <div>
                                        <span>2 </span>
                                        <p>ASSIGNMENTS</p>
                                    </div>
                                    <div>
                                        <span>23</span>
                                        <p>STUDENTS ENROLLED:</p>
                                    </div>
                                    <div>
                                        <p>ADDED:</p>
                                        <span>16 Febuary 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ad-ops'>
                            <IoIosOptions/>
                            </div>
                        </div>

                        <div className='ad-crs-crd'>
                            <img src={crsimg} alt="" />
                            <div className='ad-crs-txt'>
                                <p>Introduction to Product Design</p>
                                <h6>Lorem ipsum dolor sit amet consectetur. Sollicitudin sit et malesuada lorem tempus morbi at tortor mauris. Velit eget id pulvinar quam sed dui vitae sollicitudin nunc. Sed risus quis quam elit leo. </h6>
                                <div className='ad-det-box'>
                                    <div>
                                        <p>INSTRUCTOR:</p>
                                        <span> JOHN DOE</span>
                                    </div>
                                    <div>
                                        <span>2 </span>
                                        <p>ASSIGNMENTS</p>
                                    </div>
                                    <div>
                                        <span>23</span>
                                        <p>STUDENTS ENROLLED:</p>
                                    </div>
                                    <div>
                                        <p>ADDED:</p>
                                        <span>16 Febuary 2023</span>
                                    </div>
                                </div>
                            </div>
                            <div className='ad-ops'>
                                <IoIosOptions/>
                            </div>
                        </div>
                    </div>

                </div>
            <Footer/>
        </>
    )
}

export default CourseOverview
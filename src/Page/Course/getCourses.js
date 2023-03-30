import React from 'react'
import Navbar from '../../components/courseSearch/myCourseNav';
import Footer from '../../components/Footer'
import '../../styles/getCourse.css'
import eth from '../../assets/Rectangle 10044.png'


const MyCourse =()=>{
    return(
        <>
        <div className='main-wrap'>
            <Navbar/>
            <div className='box'>
                <div className='courseNav'>
                    <div className='navbox'>
                        <p>My Courses</p>
                        <div className='filter-wrp'>
                            <button id='all'>All Courses</button>
                            <button>New</button>
                            <button>In-Progress</button>
                            <button>Completed</button>
                        </div>
                    </div>
                </div>
                    <div className='coursewrp'>
                    {/* {courses.map((course) => (
        <div key={course.id} className="coursebx">
          <div className="crsimg">
            <img src={course.image} alt="" />
          </div>
          <div className="crsttl">
            <p>{course.title}</p>
          </div>
          <div className="crsby">
            <p>{course.author}</p>
          </div>
          <button className="crsbtn">Resume Course</button>
        </div>
      ))} */}
                    {/* <div className='coursebx'>
                            <div className='crsimg'>
                                <img src={eth} alt="" />
                            </div>
                            <div className='crsttl'>
                                <p>Ethereum and Solidity: The Complete Developer’s Guide</p>
                            </div>
                            <div className='crsby'>
                                <p>Sebastein arbogast</p>
                            </div>
                            <button className='crsbtn'>Resume Course</button>    
                        </div>         */}
                    </div>
                </div>
            <Footer/>   
        </div>
        </>
    )
}

export default MyCourse



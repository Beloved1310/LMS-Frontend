import React from 'react'
import Navbar from '../../molecules/Navbar'
import Footer from '../../molecules/Footer'
import img from '../../assets/Rectangle 146.png'
import '../../styles/searchResult.css'

const Searched =()=>{
    return(
        <>
        <Navbar/>
            <div className='res-wrp'>
                <div className='res-box'>
                    <h1 className='res-head'>2 results for "Web3 Foundations"</h1>
                    <div className='result'>
                       
                    {/* {courses.map(course => (
        <div className='result-card' key={course.id}>
          <div className='res-open'>
            <img src={course.img} alt="" />
            <div className='res-text'>
              <h3 onClick={}>{course.title}</h3>
              <p>{course.instructor}</p>
              <p>{course.rating}</p>
            </div>
          </div>
          <div className='res-price'>
            <p>{course.price}</p>
            <p id='crncy'>{course.currency}</p>
          </div>
        </div>
      ))} */}

                        <div className='result-card'>
                            <div className='res-open'>
                            <img src={img} alt="" />
                            <div className='res-text'>
                                <h3>Getting Started with Web3 Development</h3>
                                <p>Sebastein arbogast</p>
                                <p>4.6</p>
                            </div>
                            </div>
                            <div className='res-price'>
                                <p>0.062</p>
                                <p id='crncy'>ETH</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Searched
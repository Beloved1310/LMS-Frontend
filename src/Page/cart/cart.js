import React from 'react'
import '../../styles/cart.css'
import Navbar from './../../molecules/Navbar';
import Footer from './../../molecules/Footer';
import img from '../../assets/Rectangle 10044.png'


const Cart =()=>{
    return(
        <>
        <Navbar/>
            <div className='cart-wrap'>
                <div className='cart-box'>
                    <div className='cart-info'>
                        <div className='info-head'>
                            <h2>Cart</h2>
                            <p>NO COURSE IN CART</p>
                        </div>
                        <div className='info-main'>
                            <div className='cart-card'>
                                <div className='card-title'>
                                    <img src={img} alt=""/>
                                    <div className='title-text'>
                                        <h3 className='crs'>Getting Started with Web3 Development</h3>
                                        <p className='crsby'>Sebastein arbogast</p>
                                        <p className='rate'>4.6</p>
                                    </div>
                                </div>
                                <div className='card-price'>
                                    <div className='price'>
                                        <p>0.062</p>
                                        <p id='crrncy'>ETH</p>
                                    </div>
                                    <button>REMOVE</button>
                                </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className='checkbx'>
                        <div className='check-price'>
                            <p id='tot'>TOTAL</p>
                            <p id='price'>0.062</p>
                            <p id='crrncy'>ETH</p>
                        </div>
                        <button className='chkbtn'>Checkout</button>
                    </div>
                </div>
            </div>
        <Footer/>
        </>
    )
}

export default Cart
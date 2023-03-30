import React from 'react';
import Navbar from '../../molecules/Navbar';
import Footer from '../../molecules/Footer';
import {IoIosArrowDown} from 'react-icons/io'
import '../../styles/checkout.css'


const Checkout =()=>{
    return(
        <>
            <Navbar/>
                <div className='check-wrap'>
                    <div className='check-left'>
                        
                        <div className='left-inner'>
                            <p>Checkout</p>
                            <div className='bil-ad'>
                                <h3>Billing Address</h3>
                                <div className='locaxns'>
                                    <h3>Country</h3>
                                    <div className='loc-box'>
                                        <p>Ghana</p>
                                        <IoIosArrowDown/>
                                    </div>
                                </div>
                            </div>

                            <div className='pay-mthd'>
                                <h3>Payment Method</h3>
                                <div className='pay-box'>
                                    <div className='pay-card'>
                                        <div className='pay-det'>
                                            <h2>John Wallet</h2>
                                            <p>0xCe97XX...XXXXXX99841d</p>
                                        </div>
                                        <button></button>
                                    </div>
                                    <div className='pay-card'>
                                        <div className='pay-det'>
                                            <h2>John Wallet</h2>
                                            <p>VISA, MASTERCARD, AMEX</p>
                                        </div>
                                        <button></button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='check-right'>
                        <div className='sum-box'>
                            <p>Summary</p>
                            <div className='sum-price'>
                                <div className='fees'>
                                    <p>Listed Price:</p>
                                    <span>ETH 0.062</span>
                                </div>
                                <div className='fees'>
                                    <p>Fees:</p>
                                    <span>ETH 0.002</span>
                                </div>
                            </div>
                            <div className='sum-tot'>
                                <p>TOTAL:</p>
                                <p>ETH 0.064</p>
                            </div>
                            <button className='checkout'>Complete Checkout</button>
                        </div>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default Checkout;
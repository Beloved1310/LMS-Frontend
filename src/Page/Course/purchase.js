import React from 'react'
import '../../styles/purchase.css'
import Navbar from '../../molecules/Navbar'
import Footer from '../../components/Footer'
import courseImg from '../../assets/Rectangle 10044.png'
import related from '../../assets/Rectangle 146.png'
import {IoIosArrowDown} from 'react-icons/io'

const PurchaseCoursePage =()=>{
    return(
        <>
                <Navbar/>
            <div className='wrapper'>
                    <div className='course-box'>
                        <div className='title'>
                            <div className='title-mod'>
                                <p id='head'>Ethereum and Solidity: The Complete Developer’s Guide</p>
                                <p id='sub'>Use Ethereum, Solidity, and Smart Contracts to build production-ready apps based on the blockchain</p>
                                <div className='rev-ins'>
                                    <div id='rate'></div>
                                    <div id='stick'></div>
                                    <p>CREATED BY JOHN DOE</p>
                                </div>
                               <div className='price'>
                                    <p id='price'>0.062</p>
                                    <p id='crncy'>ETH</p>
                               </div>
                               <div className='opts'>
                                    <button id='enr'>Enroll Now</button>
                                    <button id='prvw'>Preview Course  </button>
                               </div>
                            </div>
                        </div>
                        <div className='title-img'>
                            <img src={courseImg} alt="" />
                        </div>
                    </div>
                    <div className='crs-body'>
                        <div className='crs-wrp'>
                          <div className='crs-des'>
                          <h2>Course Description</h2>
                            <div className='desc-box'>
                                <h4>Smart Contracts? They're here. The Ethereum Blockchain? Covered. Solidity? Yep!</h4>
                                <p>
                                There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them. That's the purpose of this course: to be the best resource online for learning about Ethereum, blockchains, and how to build apps with this new technology.
                                The development community is still figuring out the best way to use Ethereum in the creation of new and exciting apps. I spent a tremendous amount of time to research and create best practice for interfacing with Ethereum from Javascript. I can't overstate it enough; this course will show you the best and most easily repeatable patterns for creating production-ready apps with Ethereum.
                                </p>
                            </div>
                            <div className='desc-box'>
                                <h4>What tools and libraries are used?</h4>
                                <p>The Ethereum tech ecosystem is in constant change. Don't be fooled by other courses that mention how you'll learn a dozen different libraries! Every library that you'll use with Ethereum breaks and is deprecated on a near-weekly basis! Instead, this course will teach you how to assemble your own boilerplate package to develop, compile, and test Smart Contracts. By learning the core technologies, you'll be prepared to adjust to Ethereum no matter how the ecosystem changes.</p>
                            </div>
                            <div className='desc-box'>
                                <h4>What is Ethereum?</h4>
                                <p>Ethereum is a cryptocurrency much like Bitcoin, and it has been heralded as Bitcoins successor. Whereas Bitcoin currently has issues scaling with an increasing backlog of transactions, Ethereum is poised to surpass Bitcoin in performance, popularity, and value. Ethereum was created to help developers like you create applications focused around transferring money or value from one party to another.</p>
                            </div>
                            <div className='desc-box'>
                                <h4>What is Solidity?</h4>
                                <p>Solidity is a programming language for writing Smart Contracts. Essentially, think of it as a way to control a bank account with code. With Solidity, we can write applications that simulate a crowd funding campaign, a lottery, a loan, or any other type of financial instrument. Don't be intimidated by learning 'another' programming language; Solidity is known to be quite similar to Javascript and exceptionally easy to pick up for anyone who has previous JS experience. This course will give you all the tools you need to master Solidity.</p>
                            </div>
                          </div>
                          <div className='crs-rev'>
                            <h2>Reviews</h2>
                            <div className='revbox'>
                                <img src="/" alt="" />
                            </div>
                            <div className='revbox'>
                                <img src="/" alt="" />
                            </div>
                            <div className='revbox'>
                                <img src="/" alt="" />
                            </div>
                          </div>
                        </div>
                        <div className='crs-syl'>
                            <div className='syl-box'>
                                <p id='sy-head'>Syllabus</p>
                                <div className='box'>
                                    <div className='syl-head'>
                                        <p>What is Etherium?</p>
                                        <IoIosArrowDown/>
                                    </div>
                                    <div className='syls'>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='syl-head'>
                                        <p>Smart Contracts with Solidity</p>
                                        <IoIosArrowDown/>
                                    </div>
                                    <div className='syls'>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='syl-head'>
                                        <p>Advanced Smart Contracts</p>
                                        <IoIosArrowDown/>
                                    </div>
                                    <div className='syls'>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='syl-head'>
                                        <p>Building Interactive Front-Ends</p>
                                        <IoIosArrowDown/>
                                    </div>
                                    <div className='syls'>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='box'>
                                    <div className='syl-head'>
                                        <p>Real Projects with Ethereum</p>
                                        <IoIosArrowDown/>
                                    </div>
                                    <div className='syls'>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                        <div className='ind-syl'>
                                            <p>Introduction</p>
                                            <p>0:38</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rel-crs'>
                                <p>Related Courses</p>
                                <div className='rltd-box'>
                                    <img src={related} alt="" />
                                    <div className='rltd-crs'>
                                        <h4>Getting Started with Web3 Development</h4>
                                        <p>Sebastein arbogast</p>
                                    </div>
                                </div>
                                <div className='rltd-box'>
                                    <img src={related} alt="" />
                                    <div className='rltd-crs'>
                                        <h4>Getting Started with Web3 Development</h4>
                                        <p>Sebastein arbogast</p>
                                    </div>
                                </div>
                                <div className='rltd-box'>
                                    <img src={related} alt="" />
                                    <div className='rltd-crs'>
                                        <h4>Getting Started with Web3 Development</h4>
                                        <p>Sebastein arbogast</p>
                                    </div>
                                </div>
                                <div className='rltd-box'>
                                    <img src={related} alt="" />
                                    <div className='rltd-crs'>
                                        <h4>Getting Started with Web3 Development</h4>
                                        <p>Sebastein arbogast</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                <Footer/>
        </>
    )
}

export default PurchaseCoursePage



// Smart Contracts? They're here. The Ethereum Blockchain? Covered. Solidity? Yep!
// 

// 
// 

// 
// 

// 
// 
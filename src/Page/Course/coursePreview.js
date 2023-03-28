import React from 'react'
import Navbar from '../../components/courseSearch/myCourseNav'
import Footer from '../../components/Footer'
import '../../styles/coursePreview.css'
import { useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {IoIosArrowDown} from 'react-icons/io'
import {RiAccountCircleFill} from 'react-icons/ri'
import {BiLike} from 'react-icons/bi'
import {FiSend} from 'react-icons/fi'
import {AiFillStar} from 'react-icons/ai'
import img from '../../assets/Rectangle 10044.png'

const CoursePreview =()=>{
    const [showForum, setShowForum] = useState(false)
    const [showPostComment, setShowPostComment] = useState(false);
    const [showtopicReply, setShowTopicReply] = useState(false);
    const [showReview, setShowReview] = useState(false);

    const handleOverview =()=>{
        document.querySelector('.main-wrap').style.cssText = 'height: 1000px !important';
        document.querySelector('.discussion-forum').style.display = 'none';
        document.querySelector('.ovwbox').style.display = 'block'
        document.querySelector('#disfrm').style.cssText = 'color: black; border:none'
        document.querySelector('#ovw').style.cssText = 'color: #197DDA; border-bottom:2px solid #197DDA'
        document.querySelector('#rvw').style.cssText = 'color: black; border:none'
    }
    const handleForum =()=>{
        setShowForum(true);
        document.querySelector('.ovwbox').style.display = 'none'
        document.querySelector('.discussion-forum').style.display = 'block'
        document.querySelector('.disc-rep').style.display = 'none'
        document.querySelector('.disc-topics').style.display = 'block'
        document.querySelector('.disc-rev').style.display = 'none'
        document.querySelector('.main-wrap').style.cssText = 'height: 1250px !important';
        document.querySelector('#ovw').style.cssText = 'color: black; border:none'
        document.querySelector('#disfrm').style.cssText = 'color: #197DDA; border-bottom:2px solid #197DDA'
        document.querySelector('#rvw').style.cssText = 'color: black; border:none'
    }
    const handleReview =()=>{
        setShowReview(true);
        document.querySelector('.discussion-forum').style.display = 'block'
        document.querySelector('.disc-topics').style.display = 'none'
        document.querySelector('.ovwbox').style.display = 'none'
        document.querySelector('.disc-rep').style.display = 'none'
        document.querySelector('.disc-topics').style.display = 'none'
        document.querySelector('.disc-rev').style.display = 'grid'
        document.querySelector('#ovw').style.cssText = 'color: black; border:none'
        document.querySelector('#disfrm').style.cssText = 'color: black; border:none'
        document.querySelector('#rvw').style.cssText = 'color: #197DDA; border-bottom:2px solid #197DDA'
        // color: #197DDA; border-bottom:2px solid #197DDA
        console.log("hello");
    }

  const handlePostReviewClick = () => {
    setShowPostComment(true);
    // document.body.style.overflow = "hidden";
    document.querySelector('.disc-rev').style.zIndex = '-2'
    document.querySelector('.rvw-box').style.display='flex'
    document.querySelector('.post-comment').style.justifyContent = 'center'
  }
  const closeForm = () => {
    setShowPostComment(false)
    document.body.style.overflow = "scroll";
    document.querySelector('.disc-rev').style.zIndex = '0'
    document.querySelector('.rvw-box').style.display='none'
  }

  const handlePostCommentClick =()=>{
    setShowPostComment(true);
    document.querySelector('.disc-rep').style.zIndex = '-2'
    document.querySelector('.cmnt-box').style.display='flex'
    document.querySelector('.post-comment').style.justifyContent = 'center'
  }
  const closeCommentForm = () => {
    setShowPostComment(false)
    document.body.style.overflow = "scroll";
    document.querySelector('.disc-rep').style.zIndex = '0'
    document.querySelector('.cmnt-box').style.display='none'
  }

  const handleReplyUser =()=>{
    setShowPostComment(true);
    document.querySelector('.disc-topics').style.zIndex = '-1'
    document.querySelector('.disc-rep').style.zIndex = '-2'
    document.querySelector('.rply-box').style.display='flex'
    document.querySelector('.post-comment').style.justifyContent = 'center'
    console.log("here");
  }
  const closeReplyUserForm = () => {
    setShowPostComment(false)
    document.body.style.overflow = "scroll";
    document.querySelector('.disc-topics').style.zIndex = '0'
    document.querySelector('.disc-rep').style.zIndex = '0'
    document.querySelector('.rply-box').style.display='none'
  }

  const handleTopicReply = () => {
    setShowTopicReply(true)
    document.querySelector('.main-wrap').style.cssText = 'height: 1250px !important';
    document.querySelector('.disc-topics').style.display = 'none'
    document.querySelector('.disc-rep').style.display = 'grid'
  }
    return(
        <>
            <div className='main-wrap'>
                <div className='post-comment' style={{ display: showPostComment ? 'flex' : 'none' }}>
                    {/* Comment on a post */}
                    <div className='cmnt-box'>
                        <AiOutlineClose id='close' onClick={closeCommentForm}/>
                        <p>Post a Comment</p>
                        <form>
                            <label for="comment">Comment</label>
                            <input type="text" placeholder='Enter Text Here'/>
                            <label for="Forum" id='forum'>Forum</label>
                            <select>
                                <option value="don" key="">Studying Issues</option>
                            </select>
                            <button>Submit Comment</button>
                        </form>
                    </div>

                    {/* Reply a comment */}
                    <div className='rply-box'>
                        <AiOutlineClose id='close' onClick={closeReplyUserForm}/>
                        <p>Reply a Comment</p>
                        <form>
                            <label for="comment">Comment</label>
                            <input type="text" placeholder='Enter Text Here'/>
                            <label for="Forum" id='forum'>Forum</label>
                            <select>
                                <option value="don" key="">Studying Issues</option>
                            </select>
                            <button>Submit Reply</button>
                        </form>
                    </div>

                    {/* Post a Review */}
                    <div className='rvw-box'>
                        <AiOutlineClose id='close' onClick={closeForm}/>
                        <p>Post a Review</p>
                        <form>
                            <label for="comment">Review</label>
                            <input type="text" placeholder='Enter Text Here'/>
                            <label for="Rating" id='forum'>Rating</label>
                            <button>Submit Review</button>
                        </form>
                    </div>
                    
                </div>
                <Navbar/>

                    <div className='prvbx'>
                        <div className='side-mod'>
                            <p>Ethereum and Solidity: The Complete Developer’s Guide</p>
                            <p className='crscnt'>COURSE CONTENT</p>
                            <div className='topicsbx'>
                                <div className='tpx'>
                                    <div className='tpchd'>
                                        <p>What is Ethereum</p>
                                        <button><IoIosArrowDown/></button>
                                    </div>
                                    <div className='subs'>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='full-mod'>
                            <div className='full-mod-img'>
                                <img src={img} alt="" />
                            </div>

                            <div className='full-mod-tabs'>
                                <button id='ovw' onClick={handleOverview}>Overview</button>
                                <button id='disfrm' onClick={handleForum}>Discussion Forums</button>
                                <button id='rvw' onClick={handleReview}>Review</button>
                            </div>

                            <div className='full-mod-box'>
                                {/* Overview Box */}
                                <div className='ovwbox'>
                                <p>Smart Contracts? They're here. The Ethereum Blockchain? Covered. Solidity Yep!There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them. That's the purpose of this course: to be the best resource online for learning about Ethereum, blockchains, and how to build apps with this new technology.
                                The development community is still figuring out the best way to use Ethereum in the creation of new and exciting apps. I spent a tremendous amount of time to research and create best practice for interfacing with Ethereum from Javascript. I can't overstate it enough; this course will show you the best and most easily repeatable patterns for creating production-ready apps with Ethereum.
                                </p>
                                </div>

                                {/* Discussion Forum Box */}
                                <div className='discussion-forum' style={{ display: showForum ? 'flex' : 'none' }}>
                                    <div className='disc-topics'>
                                        <div className='disc-box'>
                                            <div className='disc-tpc-head'>
                                                <div id='tpc-head' onClick={handleTopicReply}>
                                                    <p>Studying Issues</p>
                                                </div>
                                                <p id='tpc-cmnt'>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                                <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                    </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep' onClick={handleReplyUser}/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>                                    
                                       
                                    </div>

                                    {/* Replies for Discussion */}
                    {/* */}        <div className='disc-rep' style={{ display: showtopicReply ? 'grid' : 'none' }}>
                                        <div className='rpl-head'>
                                            <p>Studying Issues</p>
                                            <button onClick={handlePostCommentClick}>Post Comment</button>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep' onClick={handleReplyUser}/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep'/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep'/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep' />
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep'/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep'/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div id='comments'>
                                            <p>There can be no understating it: Ethereum and Blockchain technology is the most disruptive force in years. Companies cannot hire developers who understand blockchain technologies fast enough, but there are a tiny number of resources published to help you truly understand what blockchains are used for, let alone build apps with them.</p>
                                            <div className='disc-axns'>
                                                <div className='user'>
                                                        <RiAccountCircleFill className='cmusr'/>
                                                        <div className='name-dt'>
                                                            <p>JOHN DOE</p>
                                                            <p>POSTED 10 DAYS AGO</p>
                                                        </div>
                                                </div>
                                                    <div className='axns'>
                                                        <div className='like'>
                                                            <BiLike id='lik'/>
                                                            <p>LIKE</p>
                                                        </div>
                                                        <div className='reply'>
                                                            <FiSend id='rep'/>
                                                            <p>REPLY</p>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>

                                     </div>
                                     {/* REVIEW BOX */}
                                    <div className='disc-rev' style={{ display: showReview ? 'grid' : 'none' }}>
                                        <button id='postrev' onClick={handlePostReviewClick}>Post a Review</button>
                                        <div className='rev-box'>
                                            <div className='rev-user'></div>
                                            <div className='rev'>
                                                <p id='revusr'>John Doe</p>
                                                <div className='stars'>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                    <AiFillStar/>
                                                </div>
                                                <p id='review'>Amazing experience from the very beginning. All foundations of Ethereum, Solidity and even React JS are covered by this course. Much better than what I expected! Money well spent for sure! </p>
                                            </div>
                                        </div>
                                        <div className='rev-box'></div>
                                        <div className='rev-box'></div>
                                        <div className='rev-box'></div>
                                        <div className='rev-box'></div>
                                        <div className='rev-box'></div>
                                        <div className='rev-box'></div>
                                    </div>
                                    {/*  */}
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        </>
    )
}

export default CoursePreview
import Navbar from '../../molecules/Navbar'
import Footer from '../../molecules/Footer'
import '../../styles/notification.css'



const NotifyPage =()=>{
    return(
        <>
            <Navbar/>
                <div className='not-wrap'>
                    <div className='not-box'>
                        <div className='not-head-box'>
                            <div className='head-box'>
                                <p>Notifications</p>
                                <h4>3</h4>
                            </div>
                            <button>MARK ALL AS READ</button>
                        </div>  
                        <div className='not-cnt'>
                            <div className='not-card'>
                                <img src="" alt=""/>
                                <div className='main-not'>
                                    <p id='not'>Course “Intro to Web3” was purchased successfully</p>
                                    <p id='msg'>Thank you for your purchase. Begin studying now.</p>
                                    <p id='date'>10 DAYS AGO</p>
                                    <button>Visit Course</button>
                                </div>
                            </div>
                            <div className='not-card'>
                                <img src="" alt=""/>
                                <div className='main-not'>
                                    <p id='not'>Course “Intro to Web3” was purchased successfully</p>
                                    <p id='msg'>Thank you for your purchase. Begin studying now.</p>
                                    <p id='date'>10 DAYS AGO</p>
                                    <button>Visit Course</button>
                                </div>
                            </div>
                            <div className='not-card'>
                                <img src="" alt=""/>
                                <div className='main-not'>
                                    <p id='not'>Course “Intro to Web3” was purchased successfully</p>
                                    <p id='msg'>Thank you for your purchase. Begin studying now.</p>
                                    <p id='date'>10 DAYS AGO</p>
                                    <button>Visit Course</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             <Footer/>
        </>
    )
}

export default NotifyPage
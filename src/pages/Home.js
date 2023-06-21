import React from 'react'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
import people from '../assets/two-people.png'
const Home = () => {
    return (
        <div className='home'>
            <div className="home-container-1">
                <div className="home-head">
                    <p className="mb-0">FA SOFTWARE HOUSE </p>
                </div>
                <div className='home-text-containe mt-4'>
                    <div className='home-text-container-head mb-3'>
                        <h1 className='text-bounce '>LEARN <span className='h1-text'>WITH US</span> </h1>
                        <div className='divider' />
                    </div>
                    <p  >Join us takeonline and physical courses and achieve your learning dream</p>
                    <div className='home-cards mt-md-5 '>
                        <div className="home-card">
                            <div className="img-container-1">
                                <img src={phone} alt="phone" className='img-fluid' />
                            </div>
                            <p className='mb-0 ms-2 mb-2 mb-md-0'>0306-4875225 <br />
                                0320-5905161</p>
                        </div>
                        <div className="home-card">
                            <div className="img-container-1">
                                <img src={email} alt="email" className='img-fluid' />
                            </div>
                            <p className='mb-0 ms-2 mb-2 mb-md-0'> fasmartpaf@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container-2">
                <div className="img-container-2">
                    <img src={people} alt="people" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default Home
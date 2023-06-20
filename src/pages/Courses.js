import React from 'react'
import card1 from '../assets/card1.svg'
import card2 from '../assets/card2.svg'
import card3 from '../assets/card3.svg'
import card4 from '../assets/card4.svg'
const Courses = () => {
    return (
        <div className='courses'>
            <div className="courses-head">
                <h1>What courses we <span className='offer'>offer</span> </h1>
            </div>
            <div className="courses-text">
                <p>Flutter with one code database to generate the three platforms IOS/Android and Web Development</p>
            </div>
            <div className="courses-cards">
                <div className="courses-card card-1">
                    <div className='courses-card-img'>
                        <img src={card1} alt="card1" className='img-fluid' />
                    </div>
                    <h3>ios development </h3>
                </div>
                <div className="courses-card  card-2">
                    <div className='courses-card-img'>
                        <img src={card2} alt="card2" className='img-fluid' />
                    </div>
                    <h3>Web Development</h3>
                </div>
                <div className="courses-card  card-3">
                    <div className='courses-card-img'>
                        <img src={card3} alt="card3" className='img-fluid' />
                    </div>
                    <h3>android development </h3>
                </div>
                <div className="courses-card  card-4">
                    <div className='courses-card-img'>
                        <img src={card4} alt="card4" className='img-fluid' />
                    </div>
                    <h3>Flutter development </h3>
                </div>
            </div>
        </div>
    )
}

export default Courses
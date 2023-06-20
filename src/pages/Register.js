import React from 'react'

const Register = () => {


    return (
        <div className='register '>
            <div className="container">
                <div className="row">
                    <div className="col-12    ">
                        <div className="register-card">
                            <div className="row mb-5">
                                <div className="col-12 text-center">
                                    <h1>Register!</h1>
                                    <p>Join us takeonline and physical courses and achieve your learning dream</p>
                                </div>
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="firstName" className="form-label" aria-required>First Name</label>
                                    <input type="text" className="form-control" id="firstName" name='firstName' placeholder='Enter First Name' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="lastName" className="form-label" >Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name='lastName' placeholder='Enter First Name' />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name='email' placeholder='Enter Email' />
                                </div>

                                <div className="col-md-6">
                                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' data-mdb-input-mask="+48 999-999-999" placeholder='+92 3124567891 ' />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name='address' placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name='city' placeholder='Enter City Name' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select className="selectpicker countrypicker from-control" data-live-search="true" name='country'    ></select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="education" className="form-label">Education Level</label>
                                    <input type="text" className="form-control" id="education" name='education' placeholder='Enter Education Level' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="degree" className="form-label">Degree Programme </label>
                                    <input type="text" className="form-control" id="degree" name='degree' placeholder='Enter Degree Programme ' />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="work" className="form-label">Work Experience </label>
                                    <input type="text" className="form-control" id="work" name='work' placeholder='Enter Work Experience ' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="course" className="form-label">Courses </label>
                                    <input type="text" className="form-control" id="course" name='course' placeholder='Enter Course' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="onlineCourse" className="form-label">Online/Physical Course </label>
                                    <input type="text" className="form-control" id="onlineCourse" name='onlineCourse' placeholder='Enter online/Physical Course' />
                                </div>

                                <div className="col-12 text-md-center ">
                                    <button type="submit" className="btn btn-primary w-25 "  >Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
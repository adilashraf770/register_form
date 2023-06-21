import React from 'react'

const Register = () => {
    const cities = [
        'Lahore',
        'Faisalabad',
        'Rawalpindi',
        'Gujranwala',
        'Multan',
        'Gujrat',
        'Bahawalpur',
        'Sargodha',
        'Sheikhupura',
        'Sialkot',
        'Jhang',
        'Rahim Yar Khan',
        'Kasur',
        'Sahiwal',
        'Okara',
        'Wah Cantonment',
        'Dera Ghazi Khan',
        'Mandi Bahauddin',
        'Pakpattan',
        'Khushab',
        'Chiniot',
        'Abbottabad',
        'Muzaffargarh',
        'Mianwali',
        'Toba Tek Singh',
        'Jhelum',
        'Khanewal',
        'Bhakkar',
        'Kharian',
        'Daska',
        'Gojra',
        'Mandi Bahauddin',
        'Muridke',
        'Shakargarh',
        'Hafizabad',
        'Lodhran',
        'Kamoke',
        'Sadiqabad',
        'Chakwal',
        'Burewala',
        'Bahawalnagar',
        'Chishtian',
        'Narowal',
        'Khuzdar',
        'Layyah',
        'Kasur',
        'Dera Ismail Khan',
        'Charsadda',
        'Swabi',
        'Kamalia',
        'Mian Channu',
        'Kundian',
        'Hangu',
        'Timargara',
        'Gujar Khan',
        'Kot Adu',
        'Haripur',
        'Mansehra',
        'Lala Musa',
        'Kohat',
        'Mehrabpur',
        'Mailsi',
        'Jaranwala',
        'Shujaabad',
        'Sanghar',
        'Tank',
        'Alipur',
        'Khadim Ali',
        'Dadu',
        'Jatoi',
        'Muzaffarabad',
        'Rajanpur',
        'Shikarpur',
        'Tando Allahyar',
        'Kotli',
        'Gilgit',
        'Nushki',
        'Bahawalpur',
        'Dera Murad Jamali',
        'Lakki Marwat',
        'Chaman',
        'Keti Bandar',
        'Hub',
        'Moro',
        'Umerkot',
        'Shahdadkot',
        'Matiari',
        'Gwadar',
        'Hassan Abdal',
        'Musa Khel Bazar',
        'Zhob',
        'Jampur',
        'Mianwali',
        'Narang',
        'Daggar',
        'Barkhan',
        'Hangu',
        'Dainyor',
        'Turbat',
        'Parachinar',
        'Dera Bugti',
        'Panjgur',
        'Badin',
        'Chitral',
        'Loralai',
        'Qila Abdullah',
        'Narowal',
        'Pishin',
        'Sibi',
        'Kohlu',
        'Matiari',
        'Awaran',
        'Samundri',
        'Musa Khel Bazar',
        'Qambar',
        'Kot',
        'Kambar',
        'Keti Bandar',
        'Khairpur Nathan Shah',
        'Uthal',
        'Dera Murad Jamali',
        'Karachi',
        'Lahore',
        'Faisalabad',
        'Rawalpindi',
    ];

    return (
        <div className='register '>
            <div className="container">
                <div className="row">
                    <div className="col-12    ">
                        <div className="register-card">
                            <div className="row mb-5">
                                <div className="col-12 text-center">
                                    <h1>Register!</h1>
                                    <p>Join us take online and physical courses and achieve your learning dream</p>
                                </div>
                            </div>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label htmlhtmlFor="firstName" className="form-label" aria-required>First Name</label>
                                    <input type="text" className="form-control" id="firstName" name='firstName' placeholder='Enter First Name' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlhtmlFor="lastName" className="form-label" >Last Name</label>
                                    <input type="text" className="form-control" id="lastName" name='lastName' placeholder='Enter First Name' />
                                </div>

                                <div className="col-md-6">
                                    <label htmlhtmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name='email' placeholder='Enter Email' />
                                </div>

                                <div className="col-md-6">
                                    <label htmlhtmlFor="phoneNumber" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" id="phoneNumber" name='phoneNumber' data-mdb-input-mask="+48 999-999-999" placeholder='+92 3124567891 ' />
                                </div>
                                <div className="col-12">
                                    <label htmlhtmlFor="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" name='address' placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="col-md-6">
                                    {/* <label htmlhtmlFor="country" className="form-label">Country</label>
                                    <select className="selectpicker countrypicker from-control" data-live-search="true" name='country'    ></select> 
                                    */}
                                    <label htmlhtmlFor="country" className="form-label">Select a Country:</label>
                                    <select id="country" name="country" className="form-select">
                                        <option value="">Select a country</option>
                                        <option value="pk">Pakistan</option>
                                        {/* Add more options for different countries */}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label htmlhtmlFor="city" className="form-label"> City</label>
                                    <select id="city" name="city" className="form-select">
                                        <option value="">Select a city</option>
                                        {cities.map((city, index) => (
                                            <option key={index} value={city}>{city}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlhtmlFor="education" className="form-label"> Education Level</label>
                                        <select id="education" name="education" className="form-select">
                                            <option value="">Select an education level</option>
                                            <option value="primary">Primary School</option>
                                            <option value="secondary">Secondary School</option>
                                            <option value="highSchool">High School</option>
                                            <option value="undergraduate">Undergraduate</option>
                                            <option value="graduate">Graduate</option>
                                            <option value="postgraduate">Postgraduate</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlhtmlFor="program" className="form-label">  Degree Program</label>
                                    <select id="program" name="program" className="form-select">
                                        <option value="">Select a degree program</option>
                                        <option value="computerScience">Computer Science</option>
                                        <option value="businessAdministration">Business Administration</option>
                                        <option value="engineering">Engineering</option>
                                        <option value="medicine">Medicine</option>
                                        <option value="psychology">Psychology</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label htmlhtmlFor="work" className="form-label">Work Experience </label>
                                    <input type="text" className="form-control" id="work" name='work' placeholder='Enter Work Experience ' />
                                </div>
                                <div className="col-md-6">
                                    {/* <label htmlhtmlFor="course" className="form-label">Courses </label>
                                    <input type="text" className="form-control" id="course" name='course' placeholder='Enter Course' /> 
                                    */}

                                    <label htmlhtmlFor="course" className="form-label">  Course</label>
                                    <select id="course" className="form-select">
                                        <option value="" >Select a course</option>
                                        <option value="ios">iOS Development</option>
                                        <option value="web">Web Development</option>
                                        <option value="android">Android Development</option>
                                        <option value="flutter">Flutter Development</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    {/* <label htmlhtmlFor="onlineCourse" className="form-label">Online/Physical Course </label>
                                    <input type="text" className="form-control" id="onlineCourse" name='onlineCourse' placeholder='Enter online/Physical Course' /> */}
                                    <label htmlhtmlFor="onlinecourse" className="form-label">Online/Physical Course</label>
                                    <select id="onlinecourse" className="form-select">
                                        <option value="" >Select Online/Physical Course</option>
                                        <option value="online">Online Course</option>
                                        <option value="physical">Physical Course</option>
                                    </select>
                                </div>
                                {/* <div className="col-12 justify-content-center">
                                    <label htmlhtmlFor="photoInput" className="form-label">Upload a Photo</label>
                                    <input
                                        type="file"
                                        id="photoInput"
                                        name="photo"
                                        accept="image/*"
                                        className="form-control"
                                        //   onChange={handleFileUpload}
                                        style={{
                                            display: 'none',
                                        }}
                                    />
                                    <label
                                        htmlhtmlFor="photoInput"
                                        className="btn btn-primary border rounded-circle"
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            display: 'block',
                                            textAlign: 'center',
                                        }}
                                    >
                                        <i className="bi bi-upload fs-3" ></i>
                                    </label>

                                </div> */}
                                <div className='col-12'>
                                    <label htmlFor="file" className="form-label">Upload Payment Screenshot in JGP, PNG, Gif Format</label>
                                    <input className="form-control form-control-md" id="file" type="file" />
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

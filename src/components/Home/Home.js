import React, { useState } from 'react';
import data from '../../data'
import Course from '../Course/Course';
import EnrollNow from '../EnrollNow/EnrollNow';
const Home = () => {
    
    const [courses, setCourses] = useState([data])
    const [enroll,setEnroll] = useState([]);
    const handleEnroll = (course) => {
        console.log('working',course);
        const newEnrollCart = [...enroll,course]
        setEnroll(newEnrollCart)
    }
    return (
        <div className='home' style={{display:'flex',justifyContent:'space-around'}}>
            <div className="courses">
                {
                    courses[0].map(course => <Course handleEnroll={handleEnroll} key={course.id} course={course}></Course>)
                }
            </div>
            <div className="enroll-manage">
                <EnrollNow enroll={enroll}></EnrollNow>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';

const Course = (props) => {
    const course = props.course;
    const handleEnroll = props.handleEnroll
    return (
        <div style={{width:'700px',display:'flex',alignItems:'center',border:'1px solid gray'}}>
            <img style={{height:'140px',width:'100'}} src={course.img} alt=""/>
            <div style={{marginLeft:'20px'}}>
                <h5>{course.name}</h5>
                <p>${course.price}</p>
                <p><small>{course.description}</small></p>
                <button onClick={() => handleEnroll(course)} style={{marginBottom:'20px',padding:'5px 15px',backgroundColor:'gray',border:'none',borderRadius:'4px',color:'white'}}>Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;
import React from 'react';

const EnrollCourse = ({enrolledCourse}) => {
    console.log(enrolledCourse)
    return (
        <div style={{border:'1px solid lightgray'}}>
          <h5>{enrolledCourse.name}</h5>
          <p>Price : ${enrolledCourse.price}</p>
        </div>
    );
};

export default EnrollCourse;
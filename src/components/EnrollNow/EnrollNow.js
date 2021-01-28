import React from 'react';
import EnrollCourse from '../EnrollCourse/EnrollCourse';

const EnrollNow = (props) => {
    const cart = props.enroll;
    const button = {
        display: 'flex',
        padding: '8px 15px',
        border: 'none',
        outlineWidth: '0',
        backgroundColor: 'gray',borderRadius: '5px',
        marginTop: '10px'
    }
    const totalPrice = cart.reduce((total,course) => total + course.price,0)
    return (
        <div style={{border:'1px solid black', padding:'10px'}}>
        
               <h4>Total in Cart : {cart.length}</h4>
              {
                  cart.map(enrolledCourse => <EnrollCourse key={enrolledCourse.id} enrolledCourse={enrolledCourse}></EnrollCourse>)
              }
              <button style={button}>Total Price - ${totalPrice}</button>
        </div>
    );
};

export default EnrollNow;
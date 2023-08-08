import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt officiis dolor placeat dicta saepe nisi animi, perferendis quidem sit molestias eligendi, doloribus quaerat temporibus minus ducimus! Optio in temporibus blanditiis.</p>

            <Link to='/register'>Go back to register</Link>
        </div>
    );
};

export default Terms;
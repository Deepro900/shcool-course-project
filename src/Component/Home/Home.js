import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../Cart/Cart';
import Course from '../Course/Course';
//import Course from './Course';
import './Home.css'



const Home = () => {

    const courses = useLoaderData();
    const [cart, setCart] = useState([]);
    const handleAddToCart = (course) => {
        console.log(course);
        const exists = cart.filter(product => product.course === course);
        setCart(exists);

    }


    return (
        <div className='home-container'>
            <div className='course-container'>
                <h>this is :{courses.length}</h>
                {
                    courses.map(course => <Course key={course.id} course={course}
                        handleAddToCart={handleAddToCart}
                    ></Course>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;
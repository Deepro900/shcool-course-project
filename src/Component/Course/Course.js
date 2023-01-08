import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Course.css'

const courseContext = createContext('Course');


const Course = ({ course, handleAddtoCart }) => {
    const navigate = useNavigate();
    const { logo, name } = course;
    return (
        <courseContext.Provider>
            <div className='course'>
                <img src={logo}></img>
                <h1>{name}</h1>
                <button onClick={() => handleAddtoCart(course)} className='btn-icon'>start course
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>
                <button onClick={() => navigate('/about')}>Get the course</button>

            </div>

        </courseContext.Provider>
    );
};

export default Course;
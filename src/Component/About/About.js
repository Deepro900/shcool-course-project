import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Q1 from '../Q1/Q1';
//import React from '../Q1/Q1';

const About = () => {
    const qusitions = useLoaderData();
    console.log(qusitions);


    return (
        <div>


            <h>I have {qusitions.length}</h>
            {
                qusitions.map(qusition => <Q1
                    key={qusition.id}
                    qusition={qusition}
                ></Q1>)

            }

        </div>
    );
};

export default About;
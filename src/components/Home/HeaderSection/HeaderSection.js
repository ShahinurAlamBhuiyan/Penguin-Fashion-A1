import React from 'react';
import headerSectionImg from '../../../images/green.png';
import './HeaderSection.css';

const HeaderSection = () => {
    return (
        <div className="headerSection" >
            <div>
                <h1>We are always best <br/> to our customer</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Ab ut labore sapiente ratione omnis vero error incidunt, </p>
            </div>
            <div className='imgContainer'>
                <img src={headerSectionImg} alt="black-bags" />
            </div>
        </div>
    );
};

export default HeaderSection;
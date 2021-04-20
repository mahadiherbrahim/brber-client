import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import testImg from '../../../img/services/003-rattail.png'
import React from 'react';

const Testimonial = (props) => {

    const {name,companyName,description} = props.testimonial;
    console.log(props.testimonial)
    return (
        <div className="col-md-4 card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center">
                <FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon> 
                    &nbsp; {description}  &nbsp;
                <FontAwesomeIcon icon={faQuoteRight}></FontAwesomeIcon> 
                </p>
            </div>
            <div className="card-footer d-flex  justify-content-center">
                <img className="mx-3" src={testImg} alt="" width="60"/>
                <div>
                    <h6 className="">{name}</h6>
                    <p className="m-0">{companyName}</p>
                </div>
            </div>
       </div>
    );
};

export default Testimonial;
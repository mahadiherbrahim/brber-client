import React, { useEffect, useState }  from 'react';
import hairCut from '../../../img/services/005-hairstyle-1.png'
import bodyMessage from '../../../img/services/002-nerves.png'
import bearedCut from '../../../img/services/004-hairstyle.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
// const serviceData = [
//     {
//         name: 'Hair Cut',
//         img: hairCut,
//         price:20
//     },
//     {
//         name: 'Body Message',
//         img: bodyMessage,
//         price:30
//     },
//     {
//         name: 'Beard Style',
//         img: bearedCut,
//         price:10
//     }
// ]


const Services = () => {

    const [serviceData,setServiceData] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    },[])

    return (
        <section className="container mt-5">
            <div className="text-center">
                <h5 className="text-primary">OUR SERVICES</h5>
                <h1>Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="row mt-4 pt-5">
                        {
                            serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                        }
                </div>
            </div>
        </section>
    );
};

export default Services;
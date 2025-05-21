import React from 'react'
import Cards from './Cards'

const CarCards = () => {
    const cardata = [{
        id: 0,
        name: "Mercedes-Benz",
        image: "./img12.jpg",
        price: "120,000"
    },
    {
        id: 1,
        name: "BMW 3",
        image: "./img14.jpg",
        price: "200,000"
    },
    {
        id: 2,
        name: "Royal Rose",
        image: "./img3.jpg",
        price: "400,000"
    }, {
        id: 3,
        name: "Suzuki ",
        image: "./img5.jpg",
        price: " 95,000"
    }, {
        id: 4,
        name: "Hundai Tuscan",
        image: "./img21.jpg",
        price: "200,000"
    },
    {
        id: 5,
        name: "Dodge Challenger",
        image: "./img17.jpg",
        price: " 600,000"
    },
     {
        id: 6,
        name: "Mercedes-Benz",
        image: "./img13.jpg",
        price: " 250,000"
    },
     {
        id: 7,
        name: "Ferari",
        image: "./img16.jpg",
        price: " 330,000"
    },
     {
        id: 8,
        name: "Tesla SV",
        image: "./img20.jpg",
        price: " 400,000"
    },
    {
        id: 9,
        name: "Kia VX",
        image: "./img19.jpg",
        price: " 150,000"
    },
    {
        id: 10,
        name: "Honda Tuscan",
        image: "./img6.jpg",
        price: " 250,000"
    },
    {
        id: 11,
        name: "Toyota Series",
        image: "./img5.jpg",
        price: " 600,000"
    },
    ]
    return (
        <div className='container pt-24'>
            <div>
                <h1 className='font-bold text-4xl text-center'>Our <span className='text-teal-800'>Cars</span></h1>

            </div>

            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5' >
                {cardata.map((item) => (
                    <div>
                        <Cards 
                        key={item.id}
                        name={item.name}
                        img={item.image}
                        price={item.price} 
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarCards

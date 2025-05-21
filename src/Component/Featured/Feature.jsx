import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';

const Feature = () => {
    const CarsData = [
        {
            id: 0,
            name: "Mercedes-Benz",
            image: "./img12.jpg",
            price: "100,000"
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
            name: "Suzuki Benz",
            image: "./img11.jpg",
            price: "150,000"
        },
        {
            id: 5,
            name: "Dodge Challenger",
            image: "./img17.jpg",
            price: " 600,000"
        }
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
             {
                breakpoint:  768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                   initialSlide : 2
                }
            },
             {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide :2
                }
            }
        ]
    }




    return (
        <div className='text-white mt-14 text-container'>
            <h1 className='font-bold text-4xl text-center'>Featured <span className='text-teal-700'>Cars</span></h1>
            <p className='text-container text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit temporibus quibusdam est delectus iste id?</p>

            <div className='mt-8'>
                <Slider {...settings}>
                      {CarsData.map((item)=>(
                           <Cards 
                        key={item.id}
                        image={item.image}
                        name ={item.name}
                        price={item.price}
                        />
                      
                      )
                        
                       
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default Feature

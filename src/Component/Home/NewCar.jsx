import React from 'react'
import Slider from 'react-slick'
import CarsCard from './CarsCard'

const NewCar = () => {

    const newsData = [
        {
            id: 0,
            img: "/img4.jpg",
            desc: "Toyota touts internal combustion engine potential , even in Ev age"
        },
        {
            id: 1,
            img: "/img7.jpg",
            desc: "Honda Civic gruop Pakistan best-ever sales in 2018"
        },
        {
            id: 2,
            img: "/img19.jpg",
            desc: "KIA Group Pakistan  best-ever sales in 2020 lead luxury car market"
        },
        {
            id: 3,
            img: "/img18.jpg",
            desc: "MG Aster 2021 launched in Pakistan with 1.5L engine & 7 airbags "
        },
        {
            id: 4,
            img: "/img13.jpg",
            desc: "Mercedes Benz Pakistan 2023 launched with 1.3L engine with 7-speed dual-clutch transmission "
        },
        {
            id: 5,
            img: "/img16.jpg",
            desc: "Ferrari 812 GTS 2022 launched in Pakistan with 6.5L V12 engine "
        },
        {
            id: 6,
            img: "/img10.jpg",
            desc: "Suzuki S-cross 2024 launched in Pakistan with 1.5L engine & price starts from Rs. 4.5 million "
        },
         {
            id: 7,
            img: "/img14.jpg",
            desc: "Mercedes XC 2019 launched in Pakistan with 3.5L engine & price starts from Rs. 1.5 million "
        },
         {
            id: 8,
            img: "/img20.jpg",
            desc: "Tesala XV 2023 launched in Pakistan with 2.5L engine & price starts from Rs. 3.5 million"
        },
    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
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
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            }
        ]
    }
    return (
        <div className='container mt-14 '>
            <h1 className='font-bold text-4xl text-center'>Cars <span className='text-teal-700'>News & Advices</span></h1>
            <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium delectus voluptatem accusamus vitae a aut harumillo nesciunt reprehenderit.</p>

            <div className='mt-8 container '>
                <Slider {...settings}>

                    {newsData.map((item) => {
                    return <CarsCard key={item.id} img={item.img} desc={item.desc} />
                     })}

                </Slider>
            </div>
        </div>
    )
}

export default NewCar

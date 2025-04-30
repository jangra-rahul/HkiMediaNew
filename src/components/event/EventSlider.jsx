import React from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/images/png/event_slider_1.png';
import image2 from '../../assets/images/png/event_slider_2.png';
import image3 from '../../assets/images/png/event_slider_3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventSlider = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        dots: true,
    };

    const images = [
        image1, image2, image3, image1, image2, image3,
    ];

    return (
        <div className="bg-black py-5">
            <div className="container text-white pb-4 mb-lg-4 mb-xl-5">
                <h2 className="fs_23 fw-semibold text-center ff_p mb-0">Our Events</h2>
                <p className="fs_21 pe-xl-5 col-lg-10 col-xl-8 text-center mx-auto mb-1 pt-3">
                    From red carpets to grassroots, HKI Events crafts unforgettable experiences powered by creativity, strategy, and a deep connection to local culture.
                </p>
                <Slider {...settings} className="event-slider pt-4 mt-3">
                    {images.map((src, index) => (
                        <div className="item" key={index}>
                            <img src={src} alt={`Event ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default EventSlider;

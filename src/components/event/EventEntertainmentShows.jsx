import React from 'react'


const EventEntertainmentShows = ({ heading, paragraph, description, first, second, third, fourth }) => {
    const eventImages = [first, second, third, fourth];

    return (
        <div className='bg_theme pt-5'>
            <div className="container">
                <h2 className='fs_44 text-center text-white fw-bold ff_s'>{heading}</h2>
                <p className='fs_24 text-center text-white mb-0'>{description}</p>
                <p className='text-white text-center mx-auto col-lg-10 col-xl-6 pb-5 fs_16 pt-4 mb-0 mt-lg-1'>
                    {paragraph}
                </p>
            </div>
            <div className='bg_gradient'>
                <div className='container'>
                    <div className="row">
                        {eventImages.map((obj, i) => (
                            <div className={`col-6 col-md-3 ${(i === 2 || i === 3) ? "mt-4 mt-md-0" : ""}`} key={i}>
                                <img src={obj} alt={`event-show-${i + 1}`} className='w-100 rounded-3' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EventEntertainmentShows

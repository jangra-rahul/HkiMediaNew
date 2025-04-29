import React from 'react'
import eventShow1 from '../../assets/images/png/event_show_one.png'
import eventShow2 from '../../assets/images/png/event_show_three.png'
import eventShow3 from '../../assets/images/png/event_show_two.png'
import eventShow4 from '../../assets/images/png/event_show_four.png'

const EventTheme = () => {
    const eventImages = [eventShow1, eventShow2, eventShow3, eventShow4];

    return (
        <div className='bg-black pt-5'>
            <div className="container pt-5 mt-lg-4">
                <h2 className='fs_44 text-center text-white fw-bold ff_s'>Corporate Events</h2>
                <p className='fs_24 text-center text-white mb-0'>
                    Business. Brilliance. Buzz.
                </p>
                <p className='text-white text-center mx-auto col-xl-8 pb-5 fs_16 pt-4 mb-0 mt-lg-1'>
                    From live concerts to celebrity nights, fashion runways to youth festivals — HKI curates experiences that dazzle and disrupt. With insider access to talent and tech, we produce entertaiConferences, product launches, annual days, award ceremonies — we execute each with flair, precision, and a brand-first mindset. From venue to vibe, HKI ensures your event becomes the talk of the industry.  nment that’s unforgettable and always on-trend.
                </p>


            </div>
            <div className='bg_gradient2'>
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


export default EventTheme
import React from 'react'
import eventShow4 from '../../assets/images/png/event_show_four.png'
import eventShow1 from '../../assets/images/png/event_show_one.png'
import eventShow2 from '../../assets/images/png/event_show_three.png'
import eventShow3 from '../../assets/images/png/event_show_two.png'
import { MessageIcon, PhoneCallIcon } from '../common/Icons'

const EventTheme = () => {
    const eventImages = [eventShow1, eventShow2, eventShow3, eventShow4];

    return (
        <div className='bg-black pt-5'>
            <div className="container pt-5 mt-lg-4">
                <h2 className='fs_44 text-center text-white fw-bold ff_s'>Theme Events</h2>
                <p className='fs_24 text-center text-white mb-0'>
                    If You Can Imagine It, We Can Theme It
                </p>
                <p className='text-white text-center mx-auto col-xl-9 pb-5 fs_16 pt-4 mb-0 mt-lg-1'>
                    From Bollywood nights to rustic Indian weddings, sustainability fairs to gaming fests — our themed productions bring mood boards to life. With set design, costuming, sound, and stories — HKI makes themes immersive and memorable.
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
            <div className="bg_theme py-5">
                <div className="container py-sm-2 py-md-4 my-lg-2 d-flex flex-column align-items-center justify-content-center">
                    <button className='bg-white border-0 rounded_12 px-4 py-3'>
                        <span className='py-1 fs_14 fw-semibold'>Let’s Talk Events</span>
                    </button>
                    <div className="d-flex justify-content-between justify-content-sm-center w-100 gap-sm-2 gap-sm-4 pt-4 pt-lg-5">
                        <a
                            href="tel:+919876543210"
                            className="d-flex text-white fw-semibold fs_16 align-items-center gap-1 gap-sm-2"
                        >
                            <span><MessageIcon /></span>
                            +91-9876543210
                        </a>
                        <a
                            href="mailto:events@hkimedia.in"
                            className="d-flex text-white fw-semibold fs_16 align-items-center gap-1 gap-sm-2"
                        >
                            <span><PhoneCallIcon /></span>
                            events@hkimedia.in
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EventTheme
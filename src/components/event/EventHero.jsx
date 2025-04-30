import React from 'react'
import redarrow from '../../assets/images/svg/red_arrow.svg'

const EventHero = () => {
  return (
    <div className='bg-black pb-1'>
      <div className='event_hero min_event_hero_h bg-black bg-cover'>
        <div className="container min_event_hero_h pb-lg-5 d-flex justify-content-center align-items-center align-items-lg-end">
          <h1 className='fs_30 ff_p fw-semibold mx-auto col-lg-8 col-xl-6 px-xl-5 text-center pb-4 text-white'> Where Vision Meets Vibe — Events That Echo Across India.</h1>
        </div>
      </div>
      <div className='container pt-4 mt-3'>
        <p className='text-center fs_21 text-white mb-0 col-xl-8 mx-auto pb-1'>From red carpets to grassroots, HKI Events crafts unforgettable experiences powered by creativity, strategy, and a deep connection to local culture.</p>
        <div className="d-flex justify-content-center py-4 gap-2">
          <button className='bg_theme border-0 rounded_12 px-4 py-3'>
            <span className='py-1 fs_14 text-white fw-semibold ff_i'>Explore Now</span>
          </button>
          <button className='bg-black event_btn rounded_12 px-4 py-3'>
            <span className='py-1 fs_14 fw-semibold text-white ff_i'>Plan Your Event</span>
          </button>
        </div>
        <div className='position-relative'>
          <img src={redarrow} alt="redarrow" className='position-absolute d-none d-lg-block arrow_position' />
          <div className="d-flex flex-wrap justify-content-center position-relative z-3 pb-5 pt-3 mt-1 gap-3">
            <button className='bg_darkblack border-0 rounded-1 px-3 py-3'>
              <span className='py-1 fs_14 text-white fw-semibold ff_n'>Entertainment Shows</span>
            </button>
            <button className='bg_darkblack border-0 rounded-1 px-3 py-3'>
              <span className='py-1 fs_14 text-white fw-semibold ff_n'>Corporate Events</span>
            </button>
            <button className='bg_darkblack border-0 rounded-1 px-3 py-3'>
              <span className='py-1 fs_14 text-white fw-semibold ff_n'>Government Events</span>
            </button>
            <button className='bg_darkblack border-0 rounded-1 px-3 py-3'>
              <span className='py-1 fs_14 text-white fw-semibold ff_n'>Theme Events</span>
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default EventHero
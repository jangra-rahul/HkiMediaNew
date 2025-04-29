import React from 'react'
import hkiImage from '../../assets/images/png/grid-one.png'
import topRightImage from '../../assets/images/png/grid-two.png'
import bottomRightImage from '../../assets/images/png/grid-three.png'

const EventAbout = () => {
    return (
            <div className="bg_theme py-5">
                <div className="container text-white py-md-4 my-lg-2">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-12 px-xxl-4">
                            <div className='px-xxl-5 ms-xl-5'>
                                <h2 className='fs_44 fw-bold ff_s'>About HKI Events</h2>
                                <p className='fs_24 pe-xl-5 me-xl-4 mb-0 pb-1'>HKI Events – India’s Local Pulse, National Presence</p>
                                <p className='text-white fs_16 pe-xl-2 pt-4 mt-lg-2'>Backed by HKI Media's national media academies and studios, we don’t just plan events — we shape experiences. Our presence across tier 1 and tier 2 cities allows us to connect deeply with local audiences, decode regional psychographics, and craft moments that resonate culturally and emotionally. Whether it's a corporate gala in Gurgaon or a youth fest in Indore — our creative command and ground-level strength make it happen, flawlessly.</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 px-xl-5">
                            <div className="row g-4">
                                <div className="col-md-6 col-12">
                                    <img
                                        src={hkiImage}
                                        alt="HKI Media"
                                        className="img-fluid rounded-4 w-100 h-100 object-fit-cover"
                                    />
                                </div>
                                <div className="col-md-6 col-12 d-flex flex-column justify-content-between gap-4">
                                    <img
                                        src={topRightImage}
                                        alt="Top Image"
                                        className="img-fluid rounded-4 w-100"
                                    />
                                    <img
                                        src={bottomRightImage}
                                        alt="Bottom Image"
                                        className="img-fluid rounded-4 w-100"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default EventAbout
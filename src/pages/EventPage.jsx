import React from 'react'
import EventHero from '../components/event/EventHero'
import Navbar from '../components/common/Navbar'
import EventAbout from '../components/event/EventAbout'
import EventSlider from '../components/event/EventSlider'
import EventEntertainmentShows from '../components/event/EventEntertainmentShows'
import eventShow1 from '../assets/images/png/event_show_one.png'
import eventShow2 from '../assets/images/png/event_show_three.png'
import eventShow3 from '../assets/images/png/event_show_two.png'
import eventShow4 from '../assets/images/png/event_show_four.png'
import EventsCorporate from '../components/event/EventsCorporate'
import EventTheme from '../components/event/EventTheme'

const EventPage = () => {
    return (
        <div>
            <Navbar />
            <EventHero />
            <EventAbout />
            <EventSlider />
            <EventEntertainmentShows first={eventShow1} second={eventShow2} third={eventShow3} fourth={eventShow4}
                heading={"Entertainment Shows"} paragraph={"From live concerts to celebrity nights, fashion runways to youth festivals — HKI curates experiences that dazzle and disrupt. With insider access to talent and tech, we produce entertainment that’s unforgettable and always on-trend.  "} description={"Beyond the Stage – We Create Stars, Stories, and Spectacles."} />
            <EventsCorporate />
            <EventEntertainmentShows first={eventShow2} second={eventShow1} third={eventShow3} fourth={eventShow4}
                heading={"Government Events"} paragraph={"From skill summits to state-run cultural galas, we understand the nuances of protocol, scale, and public engagement. Our government collaborations have brought together ministers, media, and the masses — seamlessly."} description={"For the People. With the Purpose"} />
            <EventTheme />
        </div>
    )
}

export default EventPage
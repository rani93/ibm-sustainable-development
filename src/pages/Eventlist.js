import EventCard from './EventCard'
import React, { useState, useEffect } from 'react';
import './EventCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarth } from '@fortawesome/free-solid-svg-icons';

export default function EventList() {
  const [events, setEvents] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("https://teamprithavikawach.onrender.com/user/latest-events")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
      })
      .then(data => {
        
        setEvents(data); // Update state with fetched data
        setDetails(data.events || []);
        console.log(details); // Update details with events data
       
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
      // console.log(events.events);
  }, []);
  // console.log(events.events[0]);

  // Log details after they are set
  // useEffect(() => {
  //   console.log(details[2]); // This will log the first detail after it is set
  // }, [details]);

  return (
    <>
    {/* <NavbarComponent/> */}
   
    
    <div className='event-items'>
      <div className='tag'>
        <span><FontAwesomeIcon icon={faEarth} /></span>
        <span >Events</span>
      </div>
    <div className='detail'>Join us for the <strong>Sustainable Futures Summit 2024</strong>, a transformative event dedicated to promoting sustainable practices and raising awareness about critical environmental issues. This year’s theme,<strong> "Innovating for a Sustainable Future,</strong>" invites participants to explore innovative solutions that can lead to a healthier planet.</div>
    
    
      
      {/* {details.map((event, index) => (
        <EventCart key={index} event= {event}/> // Adjust according to your event structure
      ))} */}
      
      
      {
        events.events?.map((event, index) => (
          <EventCard key={index} event= {event}/> // Adjust according to your event structure
        ))
        //note if we don't use ? operator then it will show an error and then error is due to asynchronous function and maybe till that time events.events doesn't fetch the data and will not gave an array and map function is work on array
      }
      <div className='detail'>Together, we can build a sustainable future for generations to come. Join us at the <strong>Sustainable Futures Summit 2024 </strong>and be part of the movement toward a healthier planet!</div>

      
    </div>
    
    {/* <Footer/> */}
    </>
  );
}


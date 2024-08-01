import React from 'react';
import './EventCard.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faLocation} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


const EventCard = (props) => {
    const { event } = props; // Destructure the event prop
    const [reg, setReg] = useState(false);

    const handler=()=>{
        setReg(!reg);
    }
    const Startingday = new Date(event.eventDate);
    const regStart= new Date(event.registration.start), regEnd= new Date(event.registration.end);
    return (
        <div className="event-card">
            <div className='im' >
                <img src={event.eventImageUrl}/>
            </div>
            <div className="event-date">
                
                <span className="day">{Startingday.getDate()}</span>
                <br/>
                <span className="month">{Startingday.toLocaleString('default', {month: 'long'})}</span>  
            </div>
            <div className="event-details">
                <h2 className="event-title">{event.eventName}</h2>
                <div className="event-time"><FontAwesomeIcon icon={faClock} style={{ color: '#4caf50' }}/> {event.eventStartTime} - {event.eventEndTime}</div>
                <div className="event-location"><FontAwesomeIcon icon={faLocation} style={{ color: '#4caf50' }} />{event.location}</div>
                <div className="event-description">
                    {event.eventDescription}</div>
                <div>{event.isFree ? "Free" : `$${event.price}`}</div>
                <div>Registration:-</div>
                <div className='time-join'>
                <div>
                <div> Start : {regStart.getDate()+"/"+ regStart.getMonth()+"/"+ regStart.getFullYear()} </div>
                <div> End : {regEnd.getDate()+"/"+ regEnd.getMonth()+"/"+ regEnd.getFullYear()} </div>
                </div>
                <div>
                    
                <button onClick={handler} className={!reg?'join-button':'registered'}> {!reg ? "Join Now ":"Delete"}  </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;

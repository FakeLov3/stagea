import React from "react";
import stagea from '../static/svgs/stagea.svg';
import AnimatedLVL from '../static/animation/somente_logo.json';
import Avatar from '../static/images/avatar_1.png';
import imageArr from './roomsImage';



export default function Rooms() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: AnimatedLVL,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const room_title = ['Lobby', 'Stage', 'Sessions', 'Connect', 'Press', 'Sponsors', 'Support'];
    const viewrs = ['120 attendees', '1,2k attendees', '500 attendees', '480 attendees', '0 attendees', '0 attendees', '0 attendees'];
    const rooms = [];
    for (const [index, value] of room_title.entries()) {
        rooms.push(
            <li>
                <img src={imageArr[index]}/>
                <span>
                    <strong>{value}</strong>
                    <span>{viewrs[index]}</span>
                </span>
            </li>
        )
    };

    return (
        <div className="rooms">
            <h1 className="logo">
                <img src={stagea}/>
            </h1>
            <div className="profile">
                <img src={Avatar}/>
                <span>
                    <span class="wlcm">Welcome back,</span>                    
                    <span>Leonardo Antunes</span>
                </span>
            </div>
            <div className="rooms__room">
                <span>Choose your room:</span>
                <ul>
                    {rooms}
                </ul>
            </div>
        </div>
    )
};

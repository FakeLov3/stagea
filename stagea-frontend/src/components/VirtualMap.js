import React from "react";
import { ReactComponent as Vmap } from 'static/svgs/map.svg';
import PeqGNC from 'static/svgs/peqgnc.svg';
import Schedule from '../components/schedule';

export default function VMaps() {

    return (
        <div className="vmaps">
            <img src={PeqGNC}/>
            <div className="vmaps__content">
                PEGN Expo is America's BIGGEST & most anticipated business-to-business networking & educational event, 
                trade show & conference for business owners, entrepreneurs, start-ups, decision-makers or anyone who 
                works or is interested in starting a small business.
            </div>
            <Vmap/>
            <Schedule/>
        </div>
    )
};

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


import PanelButton from './panelButton'


import './leftbar.css'


let mySections = ['Feed', 'Profile', 'Friends']


export default function LeftBar(props) {

    let navigate = useNavigate();
    
    // States

    // Functions

    let PanelButtons = mySections.map(element => {

        return (
            <PanelButton data={element}/>
        )
    })

    return (
        <div id="LeftBar" className="sidebar">
            <ul className="nav-list">
                {PanelButtons}
            </ul>
        </div>
    );
}

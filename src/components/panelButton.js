import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { red } from '@mui/material/colors';

import './panelButton.css'



import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBoxOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';


let mySections = {
    'Feed': <ArticleOutlinedIcon/>,
    'Profile': <AccountBoxIcon/>,
    'Friends': <PeopleAltIcon/>
}


export default function PanelButton(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <li id="panelButton" className="panelButton">
            <a href="#">
                {mySections[props.data]}
                <span className="links_name">{props.data}</span>
            </a>
            <span className="tooltip">{props.data}</span>
        </li>
    );
}

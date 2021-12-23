import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Paper from '@mui/material/Paper';


import Post from './post'


export default function Feed(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <div className="Feed">

            <div className="Feed-Wrapper">
                <Post/>
            </div>
        </div>
    );
}

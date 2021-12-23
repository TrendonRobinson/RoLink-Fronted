import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';

import './post.css'
import { Button, InputLabel } from '@mui/material';

// Icons
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonIcon from '@mui/icons-material/Person';


export default function Post(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <div className="Post">
            <Card className="Post-Wrapper">
                <h4>
                    Create Post
                </h4>
                <div className='Post-Text'>
                    <Avatar alt="Remy Sharp" src="" />
                    <input/>
                    <Button/>
                </div>
                <hr/>
                <div>
                    <Button className='Post-Quick-Button'>
                        Add Image/Video
                    </Button>
                    <Button className='Post-Quick-Button'>
                        Add Image/Video
                    </Button>
                    <Button className='Post-Quick-Button'>
                        Add Image/Video
                    </Button>
                </div>
            </Card>
        </div>
    );
}

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
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function Post(props) {

    let navigate = useNavigate();
    
    // States

    // Functions

    function handleKeyDown(e) {
        // Reset field height
        e.target.style.height = 'inherit';
    
        // Get the computed styles for the element
        const computed = window.getComputedStyle(e.target);
    
        // Calculate the height
        const height = parseInt(computed.getPropertyValue('border-top-width'), 10)
                     + parseInt(computed.getPropertyValue('border-top-width'), 10)
                     + parseInt(computed.getPropertyValue('padding-top'), 10)
                     + e.target.scrollHeight
                     + parseInt(computed.getPropertyValue('padding-bottom'), 10)
                     + parseInt(computed.getPropertyValue('border-bottom-width'), 10);
    
        e.target.style.height = `${height}px`;
    }

    return (
        <div className="Post">
            <Card className="Post-Wrapper">
                <h4>
                    Create Post
                </h4>
                <div className='Post-Text'>
                    <Avatar className="Avatar" alt="Remy Sharp" src="" />
                    <textarea placeholder="Share your mind" onKeyUp={handleKeyDown}></textarea>
                </div>
                <hr/>
                <div className='Post-Buttons'>
                    <Button className='Post-Quick-Button'>
                        <VideocamIcon/>
                        Add Image/Video
                    </Button>
                    <Button className='Post-Quick-Button'>
                        <PersonIcon/>
                        Tag a Friend
                    </Button>
                    <Button className='Post-Quick-Button'>
                        <EmojiEmotionsIcon/>
                        Feeling/Activity
                    </Button>

                    <Button className='Post-Quick-Button Post-Button'>
                        Post
                    </Button>
                </div>
            </Card>
        </div>
    );
}

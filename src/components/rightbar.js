import { Avatar, Button, Card } from '@mui/material';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";





export default function RightBar(props) {

    let navigate = useNavigate();
    
    // States

    // Functions


    return (
        <div className="RightBar">
           <Card className="RightBar-Wrapper">
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

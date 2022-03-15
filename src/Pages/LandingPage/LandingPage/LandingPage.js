import React, { useState } from 'react';
import LandingPageHeader from '../LandingPageHeader/LandingPageHeader';
import './LandingPage.css'

const LandingPage = () => {
    const [loadLongStories, setLoadLongStories] = useState(false);
    const [loadShortStories, setLoadShortStories] = useState(false);
    const toggleLongStories = () => {
        setLoadLongStories(!loadLongStories)
    }
    const toggleShortStories = () => {
        setLoadShortStories(!loadShortStories)
    }
    return (
        <div id="landing-page" style={{margin: "75.5px 450px"}}>
            <LandingPageHeader toggleLongStories={toggleLongStories} toggleShortStories={toggleShortStories}></LandingPageHeader>
        </div>
    );
};

export default LandingPage;
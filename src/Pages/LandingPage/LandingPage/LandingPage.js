import React, { useEffect, useState } from 'react';
import LandingPageHeader from '../LandingPageHeader/LandingPageHeader';
import OldBlogs from '../OldBlogs/OldBlogs';
import RecentBlogs from '../RecentBlogs/RecentBlogs';
import './LandingPage.css'

const LandingPage = () => {
    const [loadLongStories, setLoadLongStories] = useState(false);
    const [loadShortStories, setLoadShortStories] = useState(false);
    const [recentLongStories, setRecentLongStories] = useState([]);
    const [recentShortStories, setRecentShortStories] = useState([]);
    const [oldLongStories, setOldLongStories] = useState([]);
    const [oldShortStories, setOldShortStories] = useState([]);

    const [blogs, setBlogs] = useState([])

    // to fetch data from database
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            while(blogs === []){
                continue
            }
            console.log(data)

        })
    }, [])

    // to set data extracted from the database
    useEffect(() => {
        console.log(blogs)
        setRecentLongStories(blogs.filter(blog => blog.type === "long" && (new Date(blog.datetime)).getFullYear() === 2022))
        setRecentShortStories(blogs.filter(blog => blog.type === "short" && (new Date(blog.datetime)).getFullYear() === 2022 ))
        setOldLongStories(blogs.filter(blog => blog.type === "long" && (new Date(blog.datetime)).getFullYear() !== 2022))
        setOldShortStories(blogs.filter(blog => blog.type === "short" && (new Date(blog.datetime)).getFullYear() !== 2022 ))
    }, [blogs])

    const deleteAll = () => {
        setBlogs([])
    }

    const toggleLongStories = () => {
        setLoadLongStories(!loadLongStories)
    }
    const toggleShortStories = () => {
        setLoadShortStories(!loadShortStories)
    }

    return (
        <div id="landing-page" style={{margin: "75.5px 450px"}}>

            {/* ------------------------------- 
            ------  Landing Page Header  ------ 
            -------------------------------- */}
            <LandingPageHeader deleteAll={deleteAll} toggleLongStories={toggleLongStories} toggleShortStories={toggleShortStories} longStoriesLength={recentLongStories.length + oldLongStories.length} shortStoriesLength={recentShortStories.length + oldShortStories.length}></LandingPageHeader>

            
            {/* ------------------------------- 
            ---------  Recent Blogs  ---------- 
            -------------------------------- */}
            <RecentBlogs></RecentBlogs>


            {/* ------------------------------- 
            -----------  Old Blogs  ----------- 
            -------------------------------- */}
            <OldBlogs></OldBlogs>

        </div>
    );
};

export default LandingPage;
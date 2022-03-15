import { Typography } from '@mui/material';
import React from 'react';

const RecentBlogs = ({recentLongStories, recentShortStories, loadLongStories, loadShortStories}) => {
    console.log(recentLongStories)
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const reFormatDate = (dateString) => {
        const D = new Date(dateString)
        const month = monthNames[D.getMonth()]
        const date = D.getDate()
        const year = D.getFullYear()
        let hours = D.getUTCHours()
        let am_pm = "AM"
        if(hours > 12){
            hours -= 12
            am_pm = "PM"
        }
        const mins = D.getUTCMinutes() || "00"
        return `${month.substring(0, 3)} ${date}, ${year} | ${hours}:${mins} ${am_pm}` 
    }
    return (
        <div>
            <Typography style={{color: "#FDFFFC",textAlign: "left", fontSize: "20px",fontWeight: "bold", fontFamily: "Ubuntu", marginTop: "30px"}} component="div">
                Recent
            </Typography>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: '10px'}}>
            {
                loadLongStories &&
                recentLongStories.map(story => (
                    <div key={story.id} style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#242526", padding: "15px 10px 8.5px 19.5px", borderRadius: "5px", marginTop: "10px"}}>
                        <div>
                            <Typography style={{color: "#4392F1", textAlign: "left", fontSize: "15px", fontWeight: "bold", fontFamily: "Ubuntu"}} component="div">
                                {story.title}
                            </Typography>
                            <Typography style={{color: "#FDFFFC", textAlign: "left", fontSize: "16px", fontFamily: "Ubuntu"}} component="div">
                                {story.body.substring(0, 102)}...
                            </Typography>
                            <Typography style={{color: "#BCB8B1", textAlign: "left", fontSize: "16px", fontFamily: "Ubuntu"}} component="div">
                                {
                                    reFormatDate(story.datetime)
                                }
                            </Typography>
                        </div>
                        <div>
                            <img style={{width: "97px", height: "99px", objectFit: "cover", borderRadius: "3px", marginLeft: "8.5px" }} src={story.image} alt="" />
                        </div>
                    </div>
                ))
            }

            {
                loadShortStories &&
                recentShortStories.map(story => (
                    <div key={story.id} style={{display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#242526", padding: "15px 10px 8.5px 19.5px", borderRadius: "5px", marginTop: "10px"}}>
                        <div>
                            <Typography style={{color: "#FDFFFC", textAlign: "left", fontSize: "16px", fontFamily: "Ubuntu"}} component="div">
                                {story.body.substring(0, 199)}...
                            </Typography>
                            <Typography style={{color: "#BCB8B1", textAlign: "left", fontSize: "16px", fontFamily: "Ubuntu"}} component="div">
                                {
                                    reFormatDate(story.datetime)
                                }
                            </Typography>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default RecentBlogs;
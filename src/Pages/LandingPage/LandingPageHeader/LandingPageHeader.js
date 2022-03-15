import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import blogIcon from '../../../images/blog-icon.svg'
import './LandingPageHeader.css'


const LandingPageHeader = ({toggleLongStories, toggleShortStories}) => {
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor: "#242526", borderRadius: "5px"}}>
                <Toolbar variant="dense">
                    <span className="icon-bg"><img style={{width: "100%", padding: "2px"}}  src={blogIcon} alt="" /></span>
                    
                    <Typography style={{fontSize: "20px",fontWeight: "bold", fontFamily: "Ubuntu"}} component="div">
                    Blog
                    </Typography>
                    <Typography component="div">
                    <button style={{color: "#EE6352", backgroundColor: "transparent", border: '0 transparent', fontSize: "15px", fontFamily: "Ubuntu", marginLeft: "32px", cursor: "pointer"}}>Delete all</button>
                    </Typography>
                    <span style={{fontSize: "11px", fontFamily: "Ubuntu", marginLeft: "32px"}} className="num-bg"><span>25</span></span>
                    <Typography style={{fontSize: "15px", fontFamily: "Ubuntu"}} component="div">
                    Long stories
                    </Typography>
                    <label className="switch">
                        <input onClick={toggleLongStories} type="checkbox" />
                        <span className="slider round"></span>
                    </label>

                    <span style={{fontSize: "11px", fontFamily: "Ubuntu", marginLeft: "32px"}} className="num-bg"><span>2</span></span>
                    <Typography style={{fontSize: "15px", fontFamily: "Ubuntu"}} component="div">
                    Short stories
                    </Typography>
                    <label className="switch">
                        <input onClick={toggleShortStories} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default LandingPageHeader;
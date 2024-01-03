import React from 'react'
import {
    AppBar,
    Box,
    Toolbar,
} from "@mui/material";
import pandoLogo from "../../images/pando-logo.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ProgressBar } from "react-step-progress-bar";
import "./module.css";


function Header({stage, sanitizedUserName}) {
    return (
        <>
            <AppBar position="sticky" className="appbar">
                <Toolbar className="toolbar">
                    <img src={pandoLogo} alt="pando logo" className="logo" />

                    <Box className="appbar-profile">
                        <Box className="avatar">
                            {sanitizedUserName.slice(0, 2).toUpperCase()}
                        </Box>
                        <KeyboardArrowDownIcon sx={{ fill: "#C7C7C7" }} />
                    </Box>

                    <Box
                        className="stepsWrapper"
                        sx={{
                            gap: { xs: "20px", sm: "50px", md: "168px" },
                        }}
                    >
                        <Box
                            className="stepProgressBar"
                            sx={{width: "calc(100% + 52px)"}}
                        >
                            <ProgressBar
                                percent={stage > 1 ? 100 / stage : 0}
                                filledBackground="linear-gradient(270deg, #03FFB2 -73.21%, #FF7596 99.99%)"
                                height="6px"
                            />
                        </Box>
                        <Box className="stepItem">
                            <p className="stepText">Welcome</p>
                        </Box>
                        <Box className="stepItem">
                            <p className="stepText">Connectors</p>
                        </Box>
                        <Box className="stepItem">
                            <p className="stepText">Complete</p>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
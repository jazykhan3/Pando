import React from 'react';
import {
    AppBar,
    Box,
    ButtonBase,
    CircularProgress,
    InputBase,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import ReactPlayer from "react-player";

function Stage1({sanitizedUserName, KeyboardBackspaceIcon, ArrowRightAltIcon, handleBack, handleContinue}) {
  return (
    <>
        <Box className="card">
            <Box className="cardContent">
              <Box sx={{ display: "flex", alignItems: "center", gap: "48px" }}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "13px",
                  }}
                >
                  <Typography className="cardTitle">
                    Hi {sanitizedUserName},<br /> Welcome to Pando Security
                  </Typography>
                  <Typography className="cardSubtitle">
                    We're excited to welcome you aboard! Let’s start with a
                    brief overview - a quick and informative onboarding that
                    takes just 5 minutes of your time.
                  </Typography>
                </Box>
                <ReactPlayer
                  url="https://s3.amazonaws.com/pandosec.com/assets/Pando.mp4"
                  controls
                //   playing
                  style={{ width: "100%" }}
                />
              </Box>
            </Box>
            <Box className="cardFooter">
              <ButtonBase
                disabled
                className="footerBtn left"
                onClick={handleBack}
              >
                <KeyboardBackspaceIcon className={`btnIcon disabled`} />
                <Typography className={`btnText disabled`}>Back</Typography>
              </ButtonBase>
              <ButtonBase className="footerBtn right" onClick={handleContinue}>
                <Typography className="btnText">Continue</Typography>
                <ArrowRightAltIcon className="rightArrowIcon" />
              </ButtonBase>
            </Box>
        </Box>   
    </>
  )
}

export default Stage1
// CardHeader.jsx

import React from 'react';
import { Box, Typography } from "@mui/material";
import awsLogo from "../../../images/AWSDark.svg";
import "../module.css";

function CardHeader() {
    return (
        <Box className="cardHeader">
            <img width="58.447px" height="35px" src={awsLogo} alt="aws" />
            <Typography
                className="cardTitle"
                sx={{
                    textAlign: "left",
                }}
            >
                Integrating AWS using CloudFormations
            </Typography>
        </Box>
    );
}

export default CardHeader;

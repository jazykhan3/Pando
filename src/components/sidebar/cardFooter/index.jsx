// CardFooter.jsx

import React from 'react';
import { Box, ButtonBase, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "../module.css";

function CardFooter({ onBack, onContinue }) {
    return (
        <Box className="cardFooter">
            <ButtonBase className="footerBtn left" onClick={onBack}>
                <KeyboardBackspaceIcon className="btnIcon" />
                <Typography className="btnText">Back</Typography>
            </ButtonBase>
            <ButtonBase
                disabled
                className="footerBtn right"
                onClick={onContinue}
            >
                <Typography className="btnText">Continue</Typography>
                <ArrowRightAltIcon className="rightArrowIcon" />
            </ButtonBase>
        </Box>
    );
}

export default CardFooter;

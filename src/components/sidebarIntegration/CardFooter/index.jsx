import React from 'react';
import { Box, ButtonBase, Typography } from "@mui/material";
import "../module.css"

function CardFooter({ isBackDisabled, handleBack, handleLunchStack, account }) {
    return (
        <Box className="cardFooter hasCancel">
            <ButtonBase
                disabled={isBackDisabled}
                className="footerBtn footerCancelBtn left"
                onClick={handleBack}
            >
                <Typography className="btnText">Cancel</Typography>
            </ButtonBase>
            <ButtonBase
                disabled={!account}
                className="footerBtn right"
                onClick={handleLunchStack}
            >
                <Typography className="btnText">Lunch stack</Typography>
            </ButtonBase>
        </Box>
    );
}

export default CardFooter;

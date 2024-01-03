import React from 'react';
import { Box, Typography } from "@mui/material";
import "../module.css";


function SidebarStep({ title, description }) {
    return (
        <Box className="sidebarStepTextWrapper" sx={{ mt: "-7px" }}>
            <Typography variant="h4" className="sidebarStepTitle">
                {title}
            </Typography>
            <Typography variant="body1" className="sidebarStepDesc">
                {description}
            </Typography>
        </Box>
    );
}

export default SidebarStep;

import React from 'react';
import { Box, Typography } from "@mui/material";
import "../module.css";
function MakeSureSection() {
    return (
        <>
            <Typography variant="h6" className="makeSureText">
                Make sure
            </Typography>
            <Box sx={{ ml: "15px" }}>
                <Typography
                    variant="body1"
                    className="integrationMethodDesc"
                >
                    Sign in to the AWS account of your choice, ensuring you
                    have permissions to create CloudFormation and IAM
                    resources.
                </Typography>
                <Typography
                    variant="body1"
                    className="integrationMethodDesc"
                >
                    Locate your AWS account ID, which can be found at the top
                    right corner of the AWS console, and copy it to your
                    clipboard.
                </Typography>
                <Typography
                    variant="body1"
                    className="integrationMethodDesc"
                >
                    Finally, paste the copied AWS account ID into the
                    designated field.
                </Typography>
            </Box>
        </>
    );
}

export default MakeSureSection;

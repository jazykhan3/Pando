import React from 'react';
import { Typography } from "@mui/material";
import "../module.css";

function IntegrationMethodDescription() {
    return (
        <>
            <Typography
                variant="body1"
                className="integrationMethodDesc"
                sx={{ mt: "21.5px" }}
            >
                For AWS integration with Pando, you must set up an IAM Role
                in your AWS account.
            </Typography>
            <Typography variant="body1" className="integrationMethodDesc">
                This role gives Pando read-only access to the metadata of
                AWS services, including 'Get', 'List', and 'Describe'
                permissions.
            </Typography>
            <Typography variant="body1" className="integrationMethodDesc">
                Deployment can be accomplished using an AWS CloudFormation
                template.
            </Typography>
            <Typography variant="body1" className="integrationMethodDesc">
                This role grants Firefly read-only permissions.
            </Typography>
        </>
    );
}

export default IntegrationMethodDescription;

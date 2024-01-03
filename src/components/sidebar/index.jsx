import React from 'react';
import { Box, Typography } from "@mui/material";
import cloudFormationLogo from "../../images/cloudFormation.svg";
import terraformLogo from "../../images/terraform.svg";
import "./module.css";
import SidebarStep from './sideBarStep';
import CardHeader from './cardHeader';
import IntegrationMethod from './integrationMethod';
import CardFooter from './cardFooter';


function Sidebar({ handleIntegrationOpen, handleBack, handleContinue }) {
    return (
        <Box className="sidebarAndCardWrapper">
            <Box
                className="sidebar"
                sx={{ width: "202.63px", minWidth: "202.63px" }}
            >
                <Box className="sidebarStepTracksWrapper">
                    <div className="integrationGradientBullet"></div>
                </Box>
                <Box className="sidebarStepTextWrappers">
                    <SidebarStep
                        title="Integration Method"
                        description="Select the preferred method for integrating your AWS account"
                    />
                </Box>
            </Box>

            <Box className="card fullWidth" sx={{ ml: "0px" }}>
                <CardHeader />

                <Box className="cardContent" sx={{ pt: "28.5px", pb: "25.5px", justifyContent: "flex-start", alignItems: "flex-start", height: "calc(387px + 89px)", gap: 0 }}>
                    <Box className="cardMain">
                        <Box sx={{ display: "flex", gap: "50px" }}>
                            <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                <Typography variant="body1" className="integrationMethodDesc" sx={{ mt: "21.5px" }}>
                                    In this step, we're requesting ReadOnlyAccess access to your AWS account.
                                </Typography>
                                <Typography variant="body1" className="integrationMethodDesc">
                                    Please enter the AWS details for integration with our platform or use CloudFormation automation.
                                </Typography>
                            </Box>
                            <Box sx={{ display: "flex", flexDirection: "column", mt: "21px", width: "1px", bgcolor: "#D9D9D9" }} />

                            <Box className="integrationMethodWrapper">
                                <IntegrationMethod
                                    logo={cloudFormationLogo}
                                    name="CloudFormation"
                                    onClick={handleIntegrationOpen}
                                />
                                <IntegrationMethod
                                    logo={terraformLogo}
                                    name="Terraform"
                                    onClick={handleIntegrationOpen}
                                    disabled
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <CardFooter onBack={handleBack} onContinue={handleContinue} />
            </Box>
        </Box>
    );
}

export default Sidebar;

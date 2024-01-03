// SidebarIntegration.jsx

import React from 'react';
import { Box } from "@mui/material";
import MultiStepSidebar from "../MultiStepSideBar";
import CardHeader from './CardHeader';
import IntegrationMethodDescription from './IntegrationMethodDescription';
import MakeSureSection from './MakeSureSection';
import AccountInput from './AccountInput';
import AwsErrorBox from './AwsErrorBox';
import CardFooter from './CardFooter';
import awsLogo from "../../images/AWSDark.svg";
import "./module.css";

function SidebarIntegration({ sidebarStep, account, handleAccountChange, isGenerated, awsError, isBackDisabled, handleBack, handleLunchStack }) {
    return (
        <>
            <Box className="sidebarAndCardWrapper">
                <MultiStepSidebar sidebarStep={sidebarStep} />
                <Box className="card fullWidth" sx={{ ml: "0px" }}>
                    <CardHeader />

                    <Box className="cardContent" sx={{ pt: "28.5px", pb: "25.5px", justifyContent: "flex-start", alignItems: "flex-start", gap: 0 }}>
                        <Box className="cardMain">
                            <IntegrationMethodDescription />
                            <MakeSureSection />
                            <AccountInput account={account} handleAccountChange={handleAccountChange} isGenerated={isGenerated} />
                            <AwsErrorBox awsError={awsError} />
                        </Box>
                    </Box>

                    <CardFooter isBackDisabled={isBackDisabled} handleBack={handleBack} handleLunchStack={handleLunchStack} account={account} />
                </Box>
            </Box>
        </>
    );
}

export default SidebarIntegration;

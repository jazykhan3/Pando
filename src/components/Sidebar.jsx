import React from 'react'
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
  import awsLogo from "../images/AWSDark.svg";
  import cloudFormationLogo from "../images/cloudFormation.svg";
  import terraformLogo from "../images/terraform.svg";
  import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
  import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Sidebar({handleIntegrationOpen, handleBack, handleContinue}) {
  return (
    <>
        <Box className="sidebarAndCardWrapper">
            <Box
              className="sidebar"
              sx={{ width: "202.63px", minWidth: "202.63px" }}
            >
              <Box className="sidebarStepTracksWrapper">
                <div className="integrationGradientBullet"></div>
              </Box>
              <Box className="sidebarStepTextWrappers">
                <Box className="sidebarStepTextWrapper" sx={{ mt: "-7px" }}>
                  <Typography variant="h4" className="sidebarStepTitle">
                    Integration <br />
                    Method
                  </Typography>
                  <Typography variant="body1" className="sidebarStepDesc">
                    Select the preferred method for integrating your AWS account
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="card fullWidth" sx={{ ml: "0px" }}>
              <Box
                className="cardContent"
                sx={{
                  pt: "28.5px",
                  pb: "25.5px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  height: "calc(387px + 89px)",
                  gap: 0,
                }}
              >
                <Box className="cardHeader">
                  <img width="58.447px" height="35px" src={awsLogo} alt="aws" />
                  <Typography
                    className="cardTitle"
                    sx={{
                      textAlign: "left",
                    }}
                  >
                    Choose Your Preferred Integration Method
                  </Typography>
                </Box>
                <Box className="cardMain">
                  <Box sx={{ display: "flex", gap: "50px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        flex: 1,
                      }}
                    >
                      <Typography
                        variant="body1"
                        className="integrationMethodDesc"
                        sx={{ mt: "21.5px" }}
                      >
                        In this step, we're requesting ReadOnlyAccess access to
                        your AWS account.
                      </Typography>
                      <Typography
                        variant="body1"
                        className="integrationMethodDesc"
                      >
                        Please enter the AWS details for integration with our
                        platform or use CloudFormation automation.
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        mt: "21px",
                        width: "1px",
                        bgcolor: "#D9D9D9",
                      }}
                    />

                    <Box className="integrationMethodWrapper">
                      <ButtonBase
                        className="integrationMethod"
                        onClick={handleIntegrationOpen}
                      >
                        <img src={cloudFormationLogo} alt="cloud formation" />
                        <span className="integrationMethodText">
                          CloudFormation
                        </span>
                      </ButtonBase>
                      <ButtonBase
                        disabled
                        className="integrationMethod"
                        onClick={handleIntegrationOpen}
                      >
                        <img src={terraformLogo} alt="terraform" />
                        <span className="integrationMethodText">Terraform</span>
                      </ButtonBase>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="cardFooter">
                <ButtonBase className="footerBtn left" onClick={handleBack}>
                  <KeyboardBackspaceIcon className="btnIcon" />
                  <Typography className="btnText">Back</Typography>
                </ButtonBase>
                <ButtonBase
                  disabled
                  className="footerBtn right"
                  onClick={handleContinue}
                >
                  <Typography className="btnText">Continue</Typography>
                  <ArrowRightAltIcon className="rightArrowIcon" />
                </ButtonBase>
              </Box>
            </Box>
        </Box>
    </>
  )
}

export default Sidebar
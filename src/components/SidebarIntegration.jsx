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
import MultiStepSidebar from "./MultiStepSidebar";
import awsLogo from "../images/AWSDark.svg";

function SidebarIntegration({sidebarStep, account, handleAccountChange, isGenerated, awsError, isBackDisabled, handleBack, handleLunchStack}) {
  return (
    <>
        <Box className="sidebarAndCardWrapper">
            <MultiStepSidebar sidebarStep={sidebarStep} />
            <Box className="card fullWidth" sx={{ ml: "0px" }}>
              <Box
                className="cardContent"
                sx={{
                  pt: "28.5px",
                  pb: "25.5px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
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
                    Integrating AWS using CloudFormations
                  </Typography>
                </Box>
                <Box className="cardMain">
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
                  <Box sx={{ mt: "40px" }}>
                    <label className="awsAccIdText" htmlFor="accountId">
                      AWS Account ID*
                    </label>
                  </Box>
                  <InputBase
                    id="accountId"
                    className="accountIdInput"
                    value={account}
                    onChange={handleAccountChange}
                    required
                    inputProps={{
                      maxLength: 12,
                      pattern: "\\d*",
                    }}
                    InputProps={{
                      readOnly: isGenerated,
                    }}
                    style={{
                      backgroundColor: isGenerated ? "#F2F2F2" : "transparent",
                    }}
                  />
                  {awsError && (
                    <Box
                      sx={{
                        backgroundColor: "#f8d7da",
                        color: "#721c24",
                        marginTop: "1px",
                        padding: "5px",
                        borderRadius: "4px",
                        border: "1px solid #f5c2c7",
                        maxHeight: "85px",
                        overflowY: "auto",
                      }}
                    >
                      <Typography variant="body2" style={{ fontSize: "10px" }}>
                        {" "}
                        An error occurred:
                      </Typography>
                      {awsError.split("\n").map((line, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          style={{ fontSize: "10px" }}
                        >
                          {" "}
                          &bull; {line}{" "}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              </Box>
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
            </Box>
        </Box>
    </>
  )
}

export default SidebarIntegration
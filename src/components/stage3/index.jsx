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
import React from 'react'
import MultiStepSidebar from "../MultiStepSideBar";
import awsLogo from "../../images/AWSDark.svg";
import spinner from "../../images/spinner.svg";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./module.css";


function Stage3({sidebarStep, handleBack, handleContinue, handleDone, isBackDisabled}) {
  return (
    <>
        <Box className="sidebarAndCardWrapper">
              <MultiStepSidebar sidebarStep={sidebarStep} />
              <Box className="card fullWidth">
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
                    <img
                      width="58.447px"
                      height="35px"
                      src={awsLogo}
                      alt="aws"
                    />
                    <Typography
                      className="cardTitle"
                      sx={{
                        textAlign: "left",
                      }}
                    >
                      {sidebarStep === 3 ? "Complete" : "Integration"}
                    </Typography>
                  </Box>
                  <Stack
                    direction="row"
                    sx={{ alignItems: "center", gap: "18.9px" }}
                  >
                    {sidebarStep !== 3 && (
                      <img className="spinner" src={spinner} alt="spinner" />
                    )}
                    <Typography
                      variant="h6"
                      className="integrationStatusDesc"
                      sx={{ mt: "21.5px" }}
                    >
                      {sidebarStep === 3
                        ? "Integration Complete!"
                        : "Checking integration"}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="body1"
                    className="integrationMethodDesc"
                    sx={{ my: "11px" }}
                  >
                    In the AWS tab opened in your browser, be sure to complete
                    all the necessary steps.
                  </Typography>
                  <Typography variant="body1" className="integrationMethodDesc">
                    This might take a few minutes.
                  </Typography>
                </Box>
                <Box className="cardFooter hasCancel">
                  <ButtonBase
                    disabled={isBackDisabled}
                    className="footerBtn footerCancelBtn left"
                    onClick={handleBack}
                  >
                    <Typography className="btnText">Cancel</Typography>
                  </ButtonBase>
                  <Box className="doubleRightBtnWrapper">
                    <ButtonBase
                      disabled={isBackDisabled}
                      className="footerRightBackBtn right"
                      onClick={handleBack}
                    >
                      <Typography className="btnText">Back</Typography>
                    </ButtonBase>
                    {sidebarStep === 2 && (
                      <ButtonBase
                        disabled={isBackDisabled}
                        className="footerBtn right"
                        onClick={handleContinue}
                      >
                        <Typography className="btnText">Continue</Typography>
                        <ArrowRightAltIcon className="rightArrowIcon" />
                      </ButtonBase>
                    )}
                    {sidebarStep === 3 && (
                      <ButtonBase className="footerDoneBtn right">
                        <Typography className="btnText" onClick={handleDone}>
                          Done
                        </Typography>
                      </ButtonBase>
                    )}
                  </Box>
                </Box>
              </Box>
        </Box>
    </>
  )
}

export default Stage3
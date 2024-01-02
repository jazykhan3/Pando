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

export default function MultiStepSidebar({ sidebarStep }) {
    return (
      <Box className="sidebar">
        <Box className="sidebarStepTracksWrapper">
          {sidebarStep === 1 ? (
            <Box className="integrationGradientBullet"></Box>
          ) : (
            <Box className="integrationBullet"></Box>
          )}
          <Box
            className={`integrationStepLine ${sidebarStep > 0 ? "active" : ""}`}
          ></Box>
          {sidebarStep === 2 ? (
            <Box className="integrationGradientBullet"></Box>
          ) : (
            <Box
              className={`integrationBullet ${
                sidebarStep < 2 ? "incomplete" : ""
              }`}
            ></Box>
          )}
          <Box
            className={`integrationStepLine ${sidebarStep > 1 ? "active" : ""}`}
          ></Box>
          {sidebarStep === 3 ? (
            <Box className="integrationGradientBullet"></Box>
          ) : (
            <Box
              className={`integrationBullet ${
                sidebarStep < 3 ? "incomplete" : ""
              }`}
            ></Box>
          )}
        </Box>
        <Box className="sidebarStepTextWrappers">
          <Box className="sidebarStepTextWrapper" sx={{ mt: "-7px" }}>
            <Typography variant="h4" className="sidebarStepTitle">
              Account details
            </Typography>
            <Typography variant="body1" className="sidebarStepDesc">
              Create read-only assume role
            </Typography>
          </Box>
          <Box className="sidebarStepTextWrapper" sx={{ mt: "37.13px" }}>
            <Typography
              variant="h4"
              className={`sidebarStepTitle ${
                sidebarStep < 2 ? "incomplete" : ""
              }`}
            >
              Integration
            </Typography>
            <Typography
              variant="body1"
              className={`sidebarStepDesc ${sidebarStep < 2 ? "incomplete" : ""}`}
            >
              Integration details
            </Typography>
          </Box>
          <Box className="sidebarStepTextWrapper" sx={{ mt: "34px" }}>
            <Typography
              variant="h4"
              className={`sidebarStepTitle ${
                sidebarStep < 3 ? "incomplete" : ""
              }`}
            >
              Completion
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }
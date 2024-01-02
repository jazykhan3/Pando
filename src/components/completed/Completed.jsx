import React from "react";
import { Box, Typography } from "@mui/material";
import pandoSmallLogo from "../../images/pando-small-logo.svg";
import "./module.css";

function Completed() {
  return (
    <>
      <Box className="card" sx={{ justifyContent: "center" }}>
        <Box
          className="cardContent"
          sx={{
            maxWidth: "687px",
            gap: "13px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{
                color: "#002733",
                textAlign: "center",
                fontFamily: "Roboto",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Onboarding Completed
            </Typography>
            <img
              src={pandoSmallLogo}
              alt="pando small logo"
              style={{
                position: "absolute",
                top: "-20px",
                right: "-35px",
              }}
            />
          </Box>
          <Typography
            sx={{
              color: "#676767",
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "normal",
            }}
          >
            Congratulations! You have completed the onboarding process. We will
            contact you shortly to provide further information and assistance.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Completed;

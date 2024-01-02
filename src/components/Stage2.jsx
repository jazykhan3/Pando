import React from 'react'
import {
    Box,
    ButtonBase,
    InputBase,
    Typography,
} from "@mui/material";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DoneIcon from "@mui/icons-material/Done";

const integrationCardWidths = [275, 459, 370, 370, 312, 423, 403, 329];

function Stage2({connectorSearchText, handleConnectorSearchTextChange, filteredDataSourcesData, connectedDataSources, handleConnect, handleBack}) {
  return (
    <>
        <Box className="card">
            <Box className="cardContent">
              <Box sx={{ display: "flex", gap: "26.92px" }}>
                <Typography className="cardTitle">Set up Connectors</Typography>
                <Typography
                  className="cardSubtitle"
                  sx={{ textAlign: "left !important" }}
                >
                  Ready to dive into the wonderful world of Pando Security? Just
                  hook up at least one data source! Don't worry, it's easier
                  than teaching a cat to high-five!
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: "750px",
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Box className="connectorSearchFieldWrapper">
                  <InputBase
                    className="connectorSearchField"
                    type="text"
                    placeholder="Search..."
                    autoComplete="off"
                    value={connectorSearchText}
                    onChange={handleConnectorSearchTextChange}
                  />
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    color="#ccc"
                    style={{ position: "absolute", right: "12px" }}
                  />
                </Box>
              </Box>
              <Box className="integrationCardContainer">
                {filteredDataSourcesData.map((dataSource, index) => (
                  <Box
                    className="integrationCard"
                    sx={{
                      width: `${integrationCardWidths[index]}px`,
                    }}
                    key={index}
                  >
                    <img
                      className="integrationCardImg"
                      src={dataSource.logo}
                      alt={`${dataSource.name} logo`}
                    />
                    <p className="integrationCardText">{dataSource.name}</p>
                    {connectedDataSources.includes(dataSource.id) ? (
                      <Box className="connectedBtn">
                        <p className="connectedText">Connected</p>
                        <DoneIcon />
                      </Box>
                    ) : (
                      <ButtonBase
                        className="integrationCardBtn"
                        onClick={() => handleConnect(dataSource.id)}
                      >
                        Connect
                      </ButtonBase>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box className="cardFooter">
              <ButtonBase className="footerBtn left" onClick={handleBack}>
                <KeyboardBackspaceIcon />
                <Typography className="btnText">Back</Typography>
              </ButtonBase>
              <ButtonBase disabled className="footerBtn right">
                <Typography className="btnText">Continue</Typography>
                <ArrowRightAltIcon className="rightArrowIcon" />
              </ButtonBase>
            </Box>
          </Box>
    </>
  )
}

export default Stage2
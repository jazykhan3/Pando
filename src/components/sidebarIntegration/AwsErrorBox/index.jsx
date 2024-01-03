import React from 'react';
import { Box, Typography } from "@mui/material";
import "../module.css"

function AwsErrorBox({ awsError }) {
    return (
        <>
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
        </>
    );
}

export default AwsErrorBox;

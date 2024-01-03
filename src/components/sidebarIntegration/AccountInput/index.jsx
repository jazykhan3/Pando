import React from 'react';
import { Box, InputBase, Typography } from "@mui/material";
import "../module.css"

function AccountInput({ account, handleAccountChange, isGenerated }) {
    return (
        <>
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
        </>
    );
}

export default AccountInput;

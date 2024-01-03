import React from 'react';
import { ButtonBase } from "@mui/material";
import "../module.css";

function IntegrationMethod({ logo, name, onClick, disabled }) {
    return (
        <ButtonBase
            className="integrationMethod"
            onClick={onClick}
            disabled={disabled}
        >
            <img src={logo} alt={name} />
            <span className="integrationMethodText">
                {name}
            </span>
        </ButtonBase>
    );
}

export default IntegrationMethod;

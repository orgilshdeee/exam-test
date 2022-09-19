import React, { useState } from "react";
import { Button } from "@mui/material";

export const OpenToggle = ({ isOpen, setIsOpen }) => {
  return (
    <Button
      style={{ fontWeight: "bold" }}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
    {isOpen ? "collapse" : "expand"}   Child
    </Button>
  );
};

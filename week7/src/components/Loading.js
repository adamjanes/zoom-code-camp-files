import React from "react";
import { CircularProgress } from "@material-ui/core";

const loadingStyles = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};

const Loading = () => (
  <div style={loadingStyles}>
    <CircularProgress size={80} color="secondary" />
  </div>
);

export default Loading;

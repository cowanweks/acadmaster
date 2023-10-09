import { SettingOutlined } from "@ant-design/icons";
import "./StatusBar.css";
import PropTypes from "prop-types";
import React from "react";

const StatusBar = (props: any) => {
  return <div id="StatusBar"></div>;
};

StatusBar.displayName = "StatusBar";

StatusBar.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export { StatusBar };

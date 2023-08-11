import { SettingOutlined } from "@ant-design/icons";
import "./Statusbar.css";
import PropTypes from "prop-types";

const StatusBar = (props: any) => {
  return <div id="StatusBar"></div>;
};

StatusBar.displayName = "StatusBar";

StatusBar.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export { StatusBar };

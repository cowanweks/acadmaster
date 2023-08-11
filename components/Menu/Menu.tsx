import React from "react";
import Proptypes from "prop-types";
import "./Menu.css";

interface MenuProps {
  menuitems: Array<{ icon: any; content: string; to: string }>;
  title: string;
}

function Menu(props: MenuProps) {
  const { menuitems } = props;
  return (
    <span id="Menu">
      {menuitems.map((menuitem, index) => {
        return (
          <a className="MenuItem" key={index} role="button" href={menuitem.to}>
            {menuitem.icon}
            {menuitem.content}
          </a>
        );
      })}
    </span>
  );
}

export { Menu };

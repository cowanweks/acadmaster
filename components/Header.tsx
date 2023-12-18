import "./css/Header.css";

import {
  VscChromeMinimize as MinIcon,
  VscChromeMaximize as MaxIcon,
  VscChromeRestore as ResIcon,
  VscChromeClose as CloseIcon
} from "react-icons/vsc"

import React, { useState } from "react";
import { appWindow } from '@tauri-apps/api/window'

const MinBtn = () => {

  return <button className="btn" onClick={() => {
    appWindow.minimize()
  }}>
    <MinIcon />
  </button>
}

const MaxBtn = () => {
  const [maximized, setMaximized] = useState(true);


  return <button className="btn" onClick={() => {

    appWindow.toggleMaximize().then(() => {

      appWindow.isMaximized().then((state) => {
        setMaximized(state)
      })
    })
  }}>
    {maximized ? <ResIcon /> : <MaxIcon />}
  </button>
}
const CloseBtn = () => {

  return <button className="btn" onClick={() => {
    appWindow.close()
  }}>
    <CloseIcon />
  </button>
}

const Controls = () => {

  return <>
    <MinBtn />
    <MaxBtn />
    <CloseBtn />
  </>
}

export function Header() {
  return <div data-tauri-drag-region id="Header">
    <Controls />
  </div>;
}

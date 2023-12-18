import "./css/Header.css";
import { useState } from "react"
import { appWindow } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api'


export const useMaxRestore = () => {
  const [maximized, setMaximized] = useState(true);

  appWindow.toggleMaximize().then(() => {

    appWindow.isMaximized().then((state) => {
      setMaximized(state)
    })
  })
}

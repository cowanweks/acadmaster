import { appWindow } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api'


const miniMize = () => {
	appWindow.minimize()
}

const maxRestore = () => {
	appWindow.toggleMaximize()
}

const closeWindow = () => {
	appWindow.close()
	invoke("quit_app")
}

const isMaximized = async (): Promise<boolean> => {

	let condition: boolean = false;

	await appWindow.isMaximized().then(windowState => {
		condition = windowState
	})

	return condition
}

export { miniMize, maxRestore, closeWindow, isMaximized }
#![allow(unused)]
extern crate tauri;

use std::process::{self, Child, Command};
use std::thread::{sleep, Builder, Thread};
use std::time::{self, Duration};
use tauri::{
    App, AppHandle, CustomMenuItem, Manager, Menu, MenuItem, Size, Submenu, Window, WindowBuilder,
    WindowUrl,
};

pub fn start_server() {
    let server_thread: Result<std::thread::JoinHandle<()>, std::io::Error> =
        Builder::new().name("server".to_string()).spawn(move || {
            // Run the server in this thread
            let mut acadserver: Child = Command::new("server/acadserver.exe")
                .spawn()
                .expect("[x] - Error can't start server!");
        });
}

#[tauri::command]
pub fn show_splash_window(app: tauri::AppHandle) {
    app.get_window("splash_window").unwrap().show();
}

#[tauri::command]
pub fn show_signin_window(app: tauri::AppHandle) {}

#[tauri::command]
pub fn show_app_window(app: tauri::AppHandle) {}

// Quit acadmaster
#[tauri::command]
pub async fn quit_app(app: tauri::AppHandle) {
    app.exit(0);
}

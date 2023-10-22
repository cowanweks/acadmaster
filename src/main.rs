// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#![allow(unused)]

extern crate tauri;
pub mod settings;
pub mod utils;

use settings::{ApplicationSettings, UserSettings};
use tauri::{
    App, AppHandle, Builder, CustomMenuItem, Manager, Menu, MenuItem, Size, Submenu, Window,
    WindowBuilder, WindowUrl,
};
use utils::{quit_app, show_app_window, show_signin_window, show_splash_window};

fn main() {
    // Build the app
    let app: App = Builder::default()
        .invoke_handler(tauri::generate_handler![
            quit_app,
            show_app_window,
            show_signin_window,
            show_splash_window
        ])
        .plugin(tauri_plugin_window_state::Builder::default().build())
        .build(tauri::generate_context!())
        .expect("[x] - Error, couldn't start AcadMaster");

    show_app_window(app.handle());

    app.run(move |app_handle, event| {});
}

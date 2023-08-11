extern crate tauri_build;
#[cfg(windows)]
extern crate winres;

fn main() {
    // let mut res: winres::WindowsResource = winres::WindowsResource::new();
    // res.set_icon("ui\\assets\\icons\\icon.ico");
    // res.set_toolkit_path("C:\\msys64\\mingw64\\bin\\");
    // res.set_windres_path("C:\\msys64\\mingw64\\bin\\windres.exe");
    // res.compile().unwrap();

    tauri_build::build()
}

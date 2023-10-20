package main

import (
	os "os"

	app "github.com/cowanweks/acadserver/app"
	gin "github.com/gin-gonic/gin"
	godotenv "github.com/joho/godotenv"
)

func main() {}

func start_server() {

	// Load the .env file
	err := godotenv.Load(".env")

	// Panic if no .env file is found
	if err != nil {
		os.Setenv("SERV_PORT", "8086")
	}

	// Set the mode of the app to release mode
	gin.SetMode(gin.ReleaseMode)

	//Initialize the application here
	app.InitApp()
}

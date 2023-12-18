package app

import (
	"fmt"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

var router = gin.Default()
var cursor *gorm.DB

func InitApp() {
	PORT := ""

	if os.Getenv("SERV_PORT") == "" {
		PORT = fmt.Sprintf(":%s", "8086")
	} else {
		PORT = fmt.Sprintf(":%s", os.Getenv("SERV_PORT"))
	}

	// Connect to Database and return a cursor
	cursor = connect()

	// Define Routes below
	// GET Routes go below
	router.GET("/", index)
	router.GET("/students/:admno", getStudent)
	router.GET("/students", getStudents)
	router.GET("/teachers/:staffno", getTeacher)
	router.GET("/teachers", getTeachers)

	// POST Routes go below
	router.POST("/students/new", newStudent)
	router.POST("/teachers/new", newTeacher)

	// UPDATE Routes go below (PUT and PATCH)

	// DELETE Routes go below

	log.Fatal(router.Run(PORT))

}

package app

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"time"
)

func index(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, []string{
		"Hello from index",
	})
}

func getStudent(context *gin.Context) {
	var students Students
	admno, err := context.Params.Get("admno")

	if err {
		context.Abort()
	}

	cursor.Find(&students, "adm_no = ?", admno)

	context.IndentedJSON(http.StatusOK, []Students{
		students,
	})
}

func getStudents(context *gin.Context) {
	var students Students

	cursor.Find(&students)

	context.IndentedJSON(http.StatusOK, []Students{
		students,
	})
}
func newStudent(context *gin.Context) {
	type Student struct {
		AdmNo       string    `json:"adm_no"`
		FirstName   string    `json:"first_name"`
		SurName     string    `json:"sur_name"`
		LastName    string    `json:"last_name"`
		Gender      string    `json:"gender"`
		DateOfBirth time.Time `json:"date_of_birth"`
	}

	body := Student{}

	if err := context.BindJSON(&body); err != nil {
		context.AbortWithError(http.StatusBadRequest, err)
		return
	}

	admno := cursor.Create(&body)
	fmt.Println(admno)

	context.IndentedJSON(http.StatusAccepted, &body)
}
func getTeacher(context *gin.Context) {
	var teachers Teachers

	staffno, err := context.Params.Get("staffno")

	if err {
		context.Abort()
	}

	cursor.Find(&teachers, "staff_no = ?", staffno)

	context.IndentedJSON(http.StatusOK, []Teachers{
		teachers,
	})
}

func getTeachers(context *gin.Context) {
	var teachers Teachers

	cursor.Find(&teachers)

	context.IndentedJSON(http.StatusOK, []Teachers{
		teachers,
	})
}

func newTeacher(context *gin.Context) {
	type Teacher struct {
		StaffNo     string    `json:"staff_no"`
		FirstName   string    `json:"first_name"`
		SurName     string    `json:"sur_name"`
		LastName    string    `json:"last_name"`
		Gender      string    `json:"gender"`
		DateOfBirth time.Time `json:"date_of_birth"`
	}

	body := Teacher{}

	if err := context.BindJSON(&body); err != nil {
		context.AbortWithError(http.StatusBadRequest, err)
		return
	}

	staffno := cursor.Create(&body)
	fmt.Println(staffno)

	context.IndentedJSON(http.StatusAccepted, &body)
}
func newClass(context *gin.Context) {
	type Class struct {
		ClassId uint32 `json:"class_id"`
		Stream  string `json:"stream"`
		Form    uint32 `json:"form"`
	}

	body := Class{}

	if err := context.BindJSON(&body); err != nil {
		context.AbortWithError(http.StatusBadRequest, err)
		return
	}

	staffno := cursor.Create(&body)
	fmt.Println(staffno)

	context.IndentedJSON(http.StatusAccepted, &body)
}
package app

import (
	"time"
)

type Genders struct {
	Gender string `json:"gender" gorm:"primary key"`
}

type Users struct {
	StaffNo            string    `json:"staff_no,omitempty" gorm:"primary key; column:staffno"`
	UserName           string    `json:"user_name,omitempty"`
	PassWord           string    `json:"pass_word,omitempty"`
	Gender             string    `json:"gender"`
	Email              string    `json:"email,omitempty"`
	Phone              string    `json:"phone,omitempty"`
	Photo              string    `json:"photo,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type LogActivity struct {
	User           Users     `json:"user"`
	Activity       string    `json:"activity"`
	DateOfActivity time.Time `json:"date_of_activity"`
}

type Students struct {
	AdmNo               string    `gorm:"primary key;column:admno" json:"adm_no,omitempty"`
	DateOfBirth         time.Time `json:"date_of_birth,omitempty"`
	FirstName           string    `json:"first_name,omitempty"`
	SurName             string    `json:"sur_name,omitempty" `
	LastName            string    `json:"last_name,omitempty"`
	Gender              string    `json:"gender"`
	Class               string    `json:"class"`
	Stream              string    `json:"stream"`
	Photo               string    `json:"photo,omitempty"`
	ParentGuardianPhone string    `json:"parent_guardian_phone,omitempty"`
	DateOfRegistration  time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type Teachers struct {
	StaffNo            string    `json:"staff_no,omitempty" gorm:"primary key;column:staffno"`
	DateOfBirth        time.Time `json:"date_of_birth,omitempty"`
	FirstName          string    `json:"first_name,omitempty" `
	SurName            string    `json:"sur_name,omitempty"`
	LastName           string    `json:"last_name,omitempty"`
	Gender             string    `json:"gender"`
	Phone              string    `json:"phone,omitempty"`
	Email              string    `json:"email,omitempty"`
	Photo              string    `json:"photo,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type Subjects struct {
	SubjectId          string    `json:"subject_id,omitempty" gorm:"primary key;column:subjectid"`
	SubjectTitle       string    `json:"subject_title,omitempty"`
	HeadOfSubject      string    `json:"head_of_subject,omitempty"`
	Department         string    `json:"department,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type Departments struct {
	DepartmentNo       string    `json:"department_no,omitempty" gorm:"column:departmentno;primary key"`
	DepartmentName     string    `json:"department_name,omitempty"`
	HeadOfDepartment   string    `json:"head_of_department,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type Streams struct {
	StreamId           string    `json:"stream_id,omitempty" gorm:"primary key"`
	StreamName         string    `json:"stream_name,omitempty"`
	Color              string    `json:"color,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}

type Classes struct {
	ClassId            uint32    `json:"class_id,omitempty" gorm:"primary key auto increment;column:classid"`
	Stream             string    `json:"stream" gorm:"foreignKey:StreamId;references:StreamId"`
	Form               uint32    `json:"form"`
	Year               uint32    `json:"year,omitempty"`
	ClassTeacher       string    `json:"class_teacher,omitempty"`
	DateOfRegistration time.Time `gorm:"default:current_timestamp" faker:"-" json:"date_of_registration"`
}
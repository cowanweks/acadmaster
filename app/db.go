package app

import (
	fmt "fmt"
	pg "gorm.io/driver/postgres"
	gorm "gorm.io/gorm"
)

func connect() *gorm.DB {
	DBURL := "postgres://cowan:ultimate4726@localhost:5432/acadmaster"
	db, err := gorm.Open(pg.Open(DBURL), &gorm.Config{})

	if err == nil {
		db.AutoMigrate(
			&Students{}, &Teachers{}, &Users{},
			&Subjects{}, &Streams{},
			&Departments{}, Classes{}, Genders{},
		)

		return db

	} else {
		panic(fmt.Errorf("[ERR] - error connecting to database : %s", err))
	}
}

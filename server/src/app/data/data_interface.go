package data

import "fmt"

var Globalstore Datastore

type TodoStruct struct {
	NAME   string `json:"name"`
	DESCRIPTION   string `json:"description"`
}

type Datastore interface {
	CreateToDo(*TodoStruct) error
	GetAllToDo() ([]*TodoStruct, error)
}

type InMemDatastore struct {
	store []*TodoStruct
}

func (i *InMemDatastore) CreateToDo(t *TodoStruct) error {
	fmt.Printf("store %v \n", t)
	newSlice := append(i.store, t)
	fmt.Println(newSlice)
	i.store = newSlice
	return nil
}

func (i *InMemDatastore) GetAllToDo() ([]*TodoStruct, error) {
	fmt.Println(i.store)
	return i.store, nil
}

func NewInMemDatastore() Datastore {
	return &InMemDatastore{
		store: []*TodoStruct{},
	}
}

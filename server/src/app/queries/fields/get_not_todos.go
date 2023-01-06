package fields

import (
	"github.com/graphql-go/graphql"
	"github.com/yuanzai/chakra/server/src/app/data"
	"github.com/yuanzai/chakra/server/src/app/types"
)

type todoStruct struct {
	NAME        string `json:"name"`
	DESCRIPTION string `json:"description"`
}

var GetNotTodos = &graphql.Field{
	Type:        graphql.NewList(types.NotTodo),
	Description: "Get all not todos",
	Resolve: func(params graphql.ResolveParams) (interface{}, error) {
		store := data.Globalstore
		return store.GetAllToDo()
	},
}

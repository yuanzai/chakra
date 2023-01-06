package mutations

import (
	"github.com/graphql-go/graphql"
	"github.com/yuanzai/chakra/server/src/app/data"
	_ "github.com/yuanzai/chakra/server/src/app/data"
	"github.com/yuanzai/chakra/server/src/app/types"
	_ "github.com/yuanzai/chakra/server/src/app/types"
)

var CreateNotTodo = &graphql.Field{
	Type:        types.NotTodo,
	Description: "Create a not Todo",
	Args: graphql.FieldConfigArgument{
		"name": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
		"description": &graphql.ArgumentConfig{
			Type: graphql.String,
		},
	},

	Resolve: func(params graphql.ResolveParams) (interface{}, error) {

		// get our params
		name, _ := params.Args["name"].(string)
		description, _ := params.Args["description"].(string)
		store := data.Globalstore
		item := &data.TodoStruct{NAME: name, DESCRIPTION: description}
		err := store.CreateToDo(item)
		if err != nil {
			return nil, err
		}
		return item, nil
	},
}

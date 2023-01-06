package queries

import (
	"github.com/graphql-go/graphql"
	"github.com/yuanzai/chakra/server/src/app/queries/fields"
)

var RootQuery = graphql.NewObject(graphql.ObjectConfig{
	Name: "RootQuery",
	Fields: graphql.Fields{
		"getNotTodos": fields.GetNotTodos,
	},
})

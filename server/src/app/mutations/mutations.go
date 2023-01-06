package mutations

import (
	"github.com/graphql-go/graphql"
	mutations "github.com/yuanzai/chakra/server/src/app/mutations/fields"
)

var RootMutation = graphql.NewObject(graphql.ObjectConfig{
	Name: "RootMutation",
	Fields: graphql.Fields{
		"createNotTodo": mutations.CreateNotTodo,
	},
})

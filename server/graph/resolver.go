package graph

import "github.com/yuanzai/chakra/server/graph/model"

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

//go:generate go run github.com/99designs/gqlgen generate

type Resolver struct {
	todos  []*model.Todo
	houses map[string]*model.House
	leases map[string]*model.Lease
}

func NewResolver() *Resolver {
	return &Resolver{
		houses: map[string]*model.House{
			"0": {
				ID:      "0",
				Address: "Address Of 1",
				State:   "CA",
				Leases:  nil,
			},
			"1": {
				ID:      "1",
				Address: "Address of 2",
				State:   "NY",
				Leases:  nil,
			},
		},
	}
}

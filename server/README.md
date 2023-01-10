# go

Following 
- https://gqlgen.com/

Add github.com/99designs/gqlgen to your project’s tools.go

```
printf '// +build tools\npackage tools\nimport (_ "github.com/99designs/gqlgen"\n _ "github.com/99designs/gqlgen/graphql/introspection")' | gofmt > tools.go
go mod tidy
```

Initialise gqlgen config and generate models
```
go run github.com/99designs/gqlgen init
```

Start the graphql server
```
go run server.go
```

Run code gen
```
go run github.com/99designs/gqlgen generate
```

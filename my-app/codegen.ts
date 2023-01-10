import type {CodegenConfig} from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: "../graphql/*.graphqls",
    documents: "src/**/*.tsx",
    generates: {
        "src/gql/": {
            preset: "client",
            plugins: []
        },
        "src/graphql.schema.json": {
            plugins: ["introspection"]
        }
    }
};

export default config;

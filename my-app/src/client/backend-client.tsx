import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import React from "react";
import {MockedProvider} from "@apollo/client/testing";
import {getHousesQuery} from "../components/pages/gql";

type ApolloWrapperProps = {
    children?: React.ReactNode;
};

const client = new ApolloClient({
    uri: process.env.REACT_APP_BACKEND_GRAPHQL_URL,
    cache: new InMemoryCache(),
});

const BackendClientProvider: React.FC<ApolloWrapperProps> = ({children}) => {
    if (process.env.REACT_APP_MOCK_GRAPHQL === 'true') {
        return <MockedProvider
                mocks={[
                    {
                        request: {
                            query: getHousesQuery,
                        },
                        result: {
                            data:
                                {
                                    houses: [{id: "123", address:"address1"}],
                                },
                        },
                    },
                ]}
            >{children}
        </MockedProvider>
    }
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default BackendClientProvider

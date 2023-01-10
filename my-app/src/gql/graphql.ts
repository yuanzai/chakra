/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type House = {
  __typename?: 'House';
  address: Scalars['String'];
  id: Scalars['ID'];
  leases: Array<Lease>;
  state: Scalars['String'];
};

export type Lease = {
  __typename?: 'Lease';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createHouse: House;
  createTodo: Todo;
};


export type MutationCreateHouseArgs = {
  input: NewHouse;
};


export type MutationCreateTodoArgs = {
  input: NewTodo;
};

export type NewHouse = {
  address: Scalars['String'];
  leases: Array<Scalars['ID']>;
  state: Scalars['String'];
};

export type NewTodo = {
  text: Scalars['String'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  findHouse: House;
  houses: Array<House>;
  todos: Array<Todo>;
};


export type QueryFindHouseArgs = {
  input: Scalars['ID'];
};

export type Todo = {
  __typename?: 'Todo';
  done: Scalars['Boolean'];
  id: Scalars['ID'];
  text: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type GetHousesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHousesQuery = { __typename?: 'Query', houses: Array<{ __typename?: 'House', id: string, address: string }> };


export const GetHousesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHouses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"houses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}}]}}]}}]} as unknown as DocumentNode<GetHousesQuery, GetHousesQueryVariables>;
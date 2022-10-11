import { GraphQLAPIProvider, TransformerContextProvider } from '@aws-amplify/graphql-transformer-interfaces';
import { EventSourceMapping, IFunction } from '@aws-cdk/aws-lambda';
import { CfnParameter, Construct, Stack } from '@aws-cdk/core';
import { IRole } from '@aws-cdk/aws-iam';
export declare const createLambda: (stack: Stack, apiGraphql: GraphQLAPIProvider, parameterMap: Map<string, CfnParameter>, lambdaRole: IRole) => IFunction;
export declare const createLambdaRole: (context: TransformerContextProvider, stack: Construct, parameterMap: Map<string, CfnParameter>) => IRole;
export declare const createEventSourceMapping: (stack: Construct, type: string, target: IFunction, parameterMap: Map<string, CfnParameter>, tableStreamArn: string) => EventSourceMapping;
